import React, { Component } from 'react';
import ButtonPanel from './components/ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
