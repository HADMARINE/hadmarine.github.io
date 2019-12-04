import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
