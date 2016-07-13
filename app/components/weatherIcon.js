import React from 'react';

const WeatherIcon = (props) => {
  const icon = {
    '01d': 'B',
    '02d': 'H',
    '03d': 'N',
    '04d': 'Y',
    '09d': 'R',
    '10d': 'R',
    '11d': 'O',
    '13d': 'G',
    '50d': 'M',
    '01n': 'C',
    '02n': 'I',
    '03n': 'N',
    '04n': 'Y',
    '09n': 'R',
    '10n': 'R',
    '11n': 'O',
    '13n': 'G',
    '50n': 'M',
  }[props.weather.icon];

  console.log(props.weather);

  return (
    <span className="weather-icon">{icon}</span>
  );
}

export default WeatherIcon;
