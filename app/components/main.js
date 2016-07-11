import "../assets/stylesheets/main.scss";

import React from "react";
import {Link} from "react-router";
import LocationFormContainer from "../containers/locationFormContainer";

export default (props) => (
  <div className="wrapper">
    <div className="header">
      <Link className="header__title" to="/">Weather App</Link>
      <LocationFormContainer inline={true}/>
    </div>
    {props.children}
  </div>
);
