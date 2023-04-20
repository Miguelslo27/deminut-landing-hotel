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
        <Route path="/menu/:id" render={({ match }) => (
          <ViewMenu menuId={match.params.id} />
        )}>
        </Route>
      </Switch>
    </Router>
  </div>
);
export default Routes;
