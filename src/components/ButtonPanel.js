import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { handleClick } = props;

  return (
    <div className="btn-panel">

      <div className="btn-group">
        <Button name="AC" handleClick={handleClick} />
        <Button name="+/-" handleClick={handleClick} />
        <Button name="%" handleClick={handleClick} />
        <Button name="÷" handleClick={handleClick} className="orange" />
      </div>
      <div className="btn-group">
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="X" handleClick={handleClick} className="orange" />
      </div>
      <div className="btn-group">
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} className="orange" />
      </div>
      <div className="btn-group">
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} className="orange" />
      </div>
      <div className="btn-group g-4">
        <Button name="0" handleClick={handleClick} />
        <Button name="." handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} className="orange" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
