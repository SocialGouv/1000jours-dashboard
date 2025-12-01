import { CodegenConfig } from '@graphql-codegen/cli';

/**
 * `pnpm run compile` pour mettre à jours le schema. 
 *  process.env.NEXT_PUBLIC_API_URL ne fonctionne pas avec la cmd, il faut utiliser l'url
 */
const API_URL = "https://backoffice-env-1000jours-develop-91uqrtdu.dev.fabrique.social.gouv.fr"//process.env.NEXT_PUBLIC_API_URL

const config: CodegenConfig = {
  schema: `${API_URL}/graphql?nocache`,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;