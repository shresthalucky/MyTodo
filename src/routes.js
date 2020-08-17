import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/login'
          render={renderProps => <Login {...renderProps} {...props} />} />
        <Route
          path='/'
          render={renderProps => <Home {...renderProps} {...props} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
