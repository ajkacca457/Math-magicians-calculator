import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';
import Calculator from './Calculator';

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
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exac path="/home" component={Home} />
          <Route
            exact
            path="/calculator"
            render={() => (
              <Calculator
                updateResult={this.updateResult}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route exac path="/quote" component={Quote} />
        </div>
      </Router>
    );
  }
}

export default App;
