import React from 'react';

const Quote = () => (
  <div className="quote">

    <h4 style={{
      width: '60%', margin: ' 5% auto', fontSize: '150%', textDecoration: 'underline',
    }}
    >
      Quote of the day
    </h4>

    <h3 style={{ width: '60%', margin: ' 10% auto', fontSize: '150%' }}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding.
      {' '}
      <br />
      <span style={{ color: 'orange' }}>–William Paul Thurston</span>
    </h3>
  </div>
);

export default Quote;
