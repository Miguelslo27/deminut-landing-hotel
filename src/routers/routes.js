import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../components/Landing';
import ViewMenu from '../components/ViewMenu';

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div >
);
export default Routes;
