import React from "react";

import Home from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./styles/index.scss";

const App: React.FC = () => {
  document.title = "HADMARINE - Full Stack Web Developer";
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
