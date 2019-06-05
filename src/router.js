import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import Home from "./home";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={Home} />
  </Router>,
  document.getElementById("root")
);
