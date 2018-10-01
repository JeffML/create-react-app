import React from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ExchangeList from "./ExchangeList";
import ExchangeSelector from "./ExchangeSelector"

const ExchangeRates = (client) => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (<div>
        <header className="App-header">
          <ExchangeSelector data={data}/>
        </header>
          <ExchangeList data={data} />;
        </div>)
    }}
  </Query>
);

export default ExchangeRates;