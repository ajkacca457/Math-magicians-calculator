import React, { Component } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

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
