import React from "react";
import {Dump} from "../helpers/reactHelpers";
import moment from "moment";

const Forecast = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forecast">
      <h2>{props.city}</h2>
      {props.forecastData.map((data, index) => {
        const weather = data.weather[0].description;
        const date = moment.unix(data.dt).format('dddd, MM D');
        return (
          <div className="forecast__day" key={index}>
          {weather}
          {date}
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
