import React from "react";
import WeatherIcon from '../components/weatherIcon';
import {formatDate} from '../helpers/dateHelper';

const Forecast = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forecast">
      <h2 className="forecast__title">{props.city}</h2>
      <div className="forecast__days">
      {props.forecastData.map((day, index) => {
        return (
          <div
            className="forecast__day"
            key={index}
            onClick={(e) => props.onClick(day)}>
            <WeatherIcon weather={day.weather[0]} />
            <p className="forecast__date">{formatDate(day.dt)}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Forecast;
