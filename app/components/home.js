import React from "react";
import LocationForm from "./locationForm";

export default (props) => {
  return (
    <div className="home">
      <h2 className="home__title">
        Enter a City and State
      </h2>
      <LocationForm />
    </div>
  );
};
