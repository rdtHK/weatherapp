import React from "react";

export default (props) => {
  var classes = (props.inline?'location-form--inline': '') + ' location-form';
  return (
    <div className={classes}>
      <input type="search" className="location-form__input" placeholder="St. George, Utah"/>
      <button type="button" className="location-form__btn">Get weather</button>
    </div>
  );
};