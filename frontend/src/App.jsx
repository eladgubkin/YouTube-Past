import React, { useState, useEffect } from "react";
import Test from "./components/Test";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
  );
};

export default App;
