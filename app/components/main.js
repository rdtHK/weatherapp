import React from "react";
import "../assets/stylesheets/main.scss";

export default (props) => (
  <div>
    <h1>Header here</h1>
    {props.children}
    Search: <i className="glyphicon glyphicon-search"></i>
  </div>
);
