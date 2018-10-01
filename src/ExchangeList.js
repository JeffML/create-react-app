import React from 'react';

export default ({data}) => data.rates.map(({ currency, rate, name }) => (
  <div key={currency}>
    <p>{`${currency}: ${rate} (${name})`}</p>
  </div>
));