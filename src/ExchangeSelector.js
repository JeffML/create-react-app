import React from "react";
import { Query } from 'react-apollo';
import gql from "graphql-tag";

const query = gql`{
  currencyOfInterest @client
}`

const ExchangeSelector = ({data: {rates}}) => (
  <Query query={query}>
    {({ data, client }) => {

      const { currencyOfInterest} = data;

      const currRate =  rates && rates.find(rate => rate.currency === currencyOfInterest)
      const { rate, name } = currRate? currRate : {rate: 0, name: ""}

      return (
        <div>
          <input name="currencyOfInterest" value={currencyOfInterest} onChange={(evt) => client.writeData({ data: { currencyOfInterest: evt.target.value } })}></input>
          &nbsp;&nbsp;
        <input name="rate" readOnly value={rate}></input>
          &nbsp;&nbsp;
        <input name="name" readOnly value={name}></input>
        </div>
      )
    }}
  </Query>)

export default ExchangeSelector;
