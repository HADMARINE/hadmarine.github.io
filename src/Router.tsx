import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from '@pages/PageNotFound';
import Main from './pages/Main';
import AdminLogin from './pages/Admin/Login';

const ClientRouter = (
  <>
    <Router basename={'/'}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={AdminLogin} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </>
);

export default ClientRouter;
