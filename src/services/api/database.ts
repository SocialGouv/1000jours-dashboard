import gql from 'graphql-tag';

const DatabaseApi = {
  GET_WIDGET_SOURCES: gql(/* GraphQL */`
    query GetWidgetEpdsSources {
      widgetEpdsSources {
        id
        nom
      }
    }
  `),
}

export default DatabaseApi;