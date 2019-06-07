import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Application, legalPage } from "./components/index";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={App} />
    <Route path="/application" component={Application} />
    <Route path="/legal" component={legalPage} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
