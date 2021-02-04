import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import Home from './Home';
import Quote from './Quote';

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
    return (
      <div className="app">
        <div className="container">
          <h2>Math Magician Calculator</h2>
          <div className="calculator">
            <Display result={this.updateResult()} />
            <ButtonPanel handleClick={this.handleClick} />
          </div>
        </div>
        <Home />
        <Quote />
      </div>
    );
  }
}

export default App;
