import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = props => {
  const { updateResult, handleClick } = props;

  return (
    <div className="container">
      <h2 style={{ backgroundColor: '#f5913e', color: 'black', padding: '5px' }}>Let’s do some math!</h2>
      <div className="calculator">
        <Display result={updateResult()} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  handleClick: PropTypes.func.isRequired,
  updateResult: PropTypes.func.isRequired,
};

export default Calculator;
