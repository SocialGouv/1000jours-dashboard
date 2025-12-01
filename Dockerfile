ARG NODE_VERSION=24.6.0-alpine

# deps stage: cacheable, depends only on pnpm-lock.yaml + .npmrc + package.json
FROM node:$NODE_VERSION AS deps

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.24.0 --activate

COPY pnpm-lock.yaml .npmrc ./
RUN pnpm fetch

# builder stage: installs dependencies offline from pre-fetched store and builds
FROM node:$NODE_VERSION AS builder

ARG PRODUCTION
ENV PRODUCTION=$PRODUCTION
ARG GITHUB_SHA
ENV GITHUB_SHA=$GITHUB_SHA
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL
ENV NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL=$NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.24.0 --activate

COPY package.json pnpm-lock.yaml .npmrc ./
COPY --from=deps /root/.local/share/pnpm /root/.local/share/pnpm

RUN pnpm install --frozen-lockfile --offline

COPY . .

RUN pnpm build && if [ -z "$PRODUCTION" ]; then echo "Copy staging values"; cp .env.staging .env.production; fi

# runner stage: no corepack/pnpm, just Node runtime
FROM node:$NODE_VERSION AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/next.config.js .
COPY --from=builder /app/sentry.client.config.ts .
COPY --from=builder /app/sentry.server.config.ts .
COPY --from=builder /app/package.json .
COPY --from=builder /app/.env.production .
COPY --from=builder /app/.env.staging .
COPY --from=builder /app/csp.config.js .
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/.next ./.next

USER 1001

CMD ["node", "node_modules/next/dist/bin/next", "start"]