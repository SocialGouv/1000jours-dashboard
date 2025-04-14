const { version } = require("./package.json");

const ContentSecurityPolicy = require("./csp.config");

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff2|webmanifest)$/,
      type: "asset/resource",
    });

    return config;
  },
  sentry: {
    disableClientWebpackPlugin: true,
    disableServerWebpackPlugin: true,
  },
  transpilePackages: ["@codegouvfr/react-dsfr"],
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_APP_VERSION_COMMIT: process.env.GITHUB_SHA || "development",
    NEXT_PUBLIC_IS_PRODUCTION_DEPLOYMENT: process.env.PRODUCTION || "false",
    CONTENT_SECURITY_POLICY: ContentSecurityPolicy,
  },
};

// Disable Sentry for local builds
module.exports = moduleExports;
