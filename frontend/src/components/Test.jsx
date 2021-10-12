import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useMutation,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const INCREMENT_COUNTER = gql`
  mutation myFirstMutation {
    createPerson(personData: { name: "Peter", age: 24 }) {
      person {
        name
        age
        __typename
      }
    }
  }
`;

const Test = () => {
  const [{ data, loading, error }] = useMutation(INCREMENT_COUNTER);

  console.log(data);
  return (
    <ApolloProvider client={client}>
      <h1>Lol</h1>
    </ApolloProvider>
  );
};

export default Test;
