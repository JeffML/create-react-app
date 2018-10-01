import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

import ExchangeRates from './ExchangeRates'
// import ExchangeSelector from './ExchangeSelector';

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
  clientState: {
    defaults: {
      currencyOfInterest: 'USD',
    }
  }
});


const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <ExchangeRates />
    </div>
  </ApolloProvider>
)

export default App;
