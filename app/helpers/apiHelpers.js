import axios from "axios";

const appId = 'cd616a825a318a4593a6b285c07aa867';

export const currentWeather = (cityName) => {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: cityName,
      type: 'accurate',
      APPID: appId,
    }
  });
};

export const forecast = (cityName, days) => {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
    params: {
      q: cityName,
      cnt: days,
      type: 'accurate',
      APPID: appId,
    }
  });
};
