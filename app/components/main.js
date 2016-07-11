import "../assets/stylesheets/main.scss";

import React from "react";
import {Link} from "react-router";
import LocationForm from "./locationForm";

export default (props) => (
  <div className="wrapper">
    <div className="header">
      <Link className="header__title" to="/">Weather App</Link>
      <LocationForm inline={true}/>
    </div>
    {props.children}
  </div>
);
