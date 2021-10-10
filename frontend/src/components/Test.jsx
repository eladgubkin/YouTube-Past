import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const Test = () => {
  client
    .query({
      query: gql`
        query {
          hello
        }
      `,
    })
    .then((result) => console.log(result.data));

  return (
    <ApolloProvider client={client}>
      <h1>Lol</h1>
    </ApolloProvider>
  );
};

export default Test;
