import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Button />
      </div>

    );
  }
}

export default App;
