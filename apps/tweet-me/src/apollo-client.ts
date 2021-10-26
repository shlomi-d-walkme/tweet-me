import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "http://localhost:5333/graphql",
    cache: new InMemoryCache(),
  });

  