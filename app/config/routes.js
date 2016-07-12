import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Main from "../components/main";
import HomeContainer from "../containers/homeContainer";
import ForecastContainer from "../containers/forecastContainer";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="forecast/:city" component={ForecastContainer} />
    </Route>
  </Router>
);
