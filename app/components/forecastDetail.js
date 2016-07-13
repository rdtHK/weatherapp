import React from "react";
import WeatherIcon from '../components/weatherIcon';
import {formatDate} from '../helpers/dateHelper';

const ForecastDetail = (props) => {
  const {city, day} = props;

  return (
    <div className="forecast-detail">
      <WeatherIcon weather={day.weather[0]} />
      <p className="forecast-detail__date">{formatDate(day.dt)}</p>
      <p>{city}</p>
      <p>{day.weather[0].description}</p>
      <p>min temp: {day.temp.min} degrees</p>
      <p>max temp: {day.temp.max} degrees</p>
      <p>humidity: {day.humidity}</p>
    </div>
  );
};

export default ForecastDetail;
