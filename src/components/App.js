import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick=buttonName => {
    const newstate = calculate(this.state, buttonName);
    this.setState(newstate);
  }

  updateResult=() => {
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = this.state;
    if (next) {
      return next;
    }
    return total;
  };

  render() {
    console.log(this.state);
    return (
      <div className="calculator">
        <h2>Math Magician Calculator</h2>
        <Display result={this.updateResult()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
