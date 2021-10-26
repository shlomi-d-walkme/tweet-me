import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider} from "@apollo/client";
import App from "./app/app";
import { apolloClient } from "./apollo-client";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,

  document.getElementById("root")
);


