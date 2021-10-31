import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from '@pages/PageNotFound';
import Main from './pages/Main';

const ClientRouter = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </>
);

export default ClientRouter;
