
const appId = 'cd616a825a318a4593a6b285c07aa867';


export const currentWeather = (cityName) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&type=accurate&APPID=${appId}`;

  return url;
};

export const forecast = (cityName, days) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${appId}&cnt=${days}`;

  return url;
};
