import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  Application,
  Team,
  Reset,
  Login,
  Signup,
  Form
} from "./components/index";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={App} />
    <Route path="/apply" component={Application} />
    <Route path="/team" component={Team} />
    <Route path="/form" component={Form} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/reset" component={Reset} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
