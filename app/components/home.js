import React from "react";
import LocationFormContainer from "../containers/locationFormContainer";

export default (props) => {
  return (
    <div className="home">
      <h2 className="home__title">
        Enter a City and State
      </h2>
      <LocationFormContainer />
    </div>
  );
};
