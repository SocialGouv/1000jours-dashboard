import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context';


const API_URL = process.env.NEXT_PUBLIC_API_URL

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql?nocache`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
  },
  link: authLink.concat(httpLink),
})
