import React from "react";
import {Router, Route, hashHistory} from "react-router";
import Hello from "../components/hello";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Hello} />
  </Router>
);
