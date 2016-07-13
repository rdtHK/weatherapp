import React from "react";
import WeatherIcon from '../components/weatherIcon';
import {Dump} from "../helpers/reactHelpers";
import moment from "moment";

const Forecast = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forecast">
      <h2 className="forecast__title">{props.city}</h2>
      <div className="forecast__days">
      {props.forecastData.map((data, index) => {
        const date = moment.unix(data.dt).format('dddd, MMM D');
        return (
          <div className="forecast__day" key={index}>
            <WeatherIcon weather={data.weather[0]} />
            <p className="forecast__date">{date}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Forecast;
