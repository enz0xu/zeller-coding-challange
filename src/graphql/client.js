import { ApolloClient, InMemoryCache } from "@apollo/client";
import awsconfig from "../config/aws-exports";

export const client = new ApolloClient({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    "x-api-key": awsconfig.aws_appsync_apiKey,
  },
  cache: new InMemoryCache(),
});
