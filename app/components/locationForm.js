import React from "react";

const LocationForm = (props) => {
  var classes = 'location-form';

  if (props.inline) {
    classes += ' location-form--inline';
  }

  return (
    <form className={classes} onSubmit={props.onSubmit}>
      <input
        type="search"
        name="place"
        className="location-form__input"
        placeholder="St. George, Utah" />
      <button type="submit" className="location-form__btn">
        Get weather
      </button>
    </form>
  );
};

export default LocationForm;