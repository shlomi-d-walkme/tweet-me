import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import App from "./app/app";

const client = new ApolloClient({
  uri: "http://localhost:5333/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>{" "}
  </ApolloProvider>,

  document.getElementById("root")
);
