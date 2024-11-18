import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.EXPO_PUBLIC_GITHUB_GRAPHQL_API,
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_GITHUB_GRAPHQL_API_API_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
