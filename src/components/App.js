import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <h2>Math Magician Calculator</h2>
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
