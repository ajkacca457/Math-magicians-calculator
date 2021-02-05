import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';
import Calculator from './Calculator';
import '@fortawesome/fontawesome-free/css/all.min.css';

const data = {
  total: null,
  next: null,
  operation: null,
};

const App = () => {
  const [state, setState] = useState(data);

  const handleClick = buttonName => {
    const newstate = calculate(state, buttonName);
    setState(newstate);
  };

  const updateResult = () => {
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = state;
    if (next) {
      return next;
    }
    return total;
  };

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
              updateResult={updateResult}
              handleClick={handleClick}
            />
          )}
        />
        <Route exac path="/quote" component={Quote} />
      </div>
    </Router>
  );
};

export default App;
