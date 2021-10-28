import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider} from "@apollo/client";
import App from "./app/app";
import { apolloClient } from "./apollo-client";
import TimeAgo from 'javascript-time-ago'
//@ts-expect-error
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,

  document.getElementById("root")
);


