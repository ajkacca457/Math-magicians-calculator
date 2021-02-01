import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick } = props;
  return (
    <>
      <button
        type="button"
        onClick={() => handleClick(name)}
        className={!(name === '÷' || name === 'X' || name === '-' || name === '+' || name === '=') ? '' : 'orange'}
      >
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;
