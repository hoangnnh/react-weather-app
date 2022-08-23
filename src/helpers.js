const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const API_KEY = "886705b4c1182eb1c69f28eb8c520e20";

export const convertDtFromOwmApiToDate = (dt) => {
  const time = new Date(dt * 1000);

  const year = time.getFullYear();
  const weekday = WEEK_DAYS[time.getDay()];
  const month = MONTHS[time.getMonth()];
  const day = time.getDate();

  return `${weekday}, ${month} ${day} ${year}`;
};

export const convertDtFromOwmApiToTime = (dt) => {
  const time = new Date(dt * 1000);

  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};

export const getCurrentWeatherByCityName = async (location) => {
  const END_POINT = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const response = await fetch(END_POINT);

  const data = await response.json();

  return {
    clouds: data.clouds.all,
    coord: data.coord,
    date: convertDtFromOwmApiToDate(data.dt),
    description: data.weather[0].description,
    feelsLike: Math.round(data.main.feels_like),
    icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`,
    location: `${data.name}, ${data.sys.country}`,
    pressure: data.main.pressure,
    sunriseAt: convertDtFromOwmApiToTime(data.sys.sunrise),
    sunsetAt: convertDtFromOwmApiToTime(data.sys.sunset),
    temperature: Math.round(data.main.temp),
    time: convertDtFromOwmApiToTime(data.dt),
    windSpeed: data.wind.speed,
  };
};

export const getWeatherForecastByCityName = async (location) => {
  const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric&cnt=6`;

  const response = await fetch(END_POINT);

  const data = await response.json();

  const forecast = [];

  data.list.forEach((item, idx) => {
    forecast.push({
      day: WEEK_DAYS[new Date(item.dt * 1000).getDay()],
      time: `${new Date(item.dt * 1000).getHours()}h`,
      temperature: Math.round(item.main.temp),
      icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${item.weather[0].icon}.svg`,
      description: item.weather[0].description,
    });
  });

  return forecast;
};

export const getMyLocationCoord = async () => {
  const getLocation = () =>
    new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          resolve(location);
        },
        (err) => reject(err)
      );
    });
  const data = getLocation();

  return data;
};

export const getCurrentWeatherByCoords = async ({ lat, lon }) => {
  const END_POINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(END_POINT);

  const data = await response.json();

  return {
    clouds: data.clouds.all,
    coord: data.coord,
    date: convertDtFromOwmApiToDate(data.dt),
    description: data.weather[0].description,
    feelsLike: Math.round(data.main.feels_like),
    icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`,
    location: `${data.name}, ${data.sys.country}`,
    pressure: data.main.pressure,
    sunriseAt: convertDtFromOwmApiToTime(data.sys.sunrise),
    sunsetAt: convertDtFromOwmApiToTime(data.sys.sunset),
    temperature: Math.round(data.main.temp),
    time: convertDtFromOwmApiToTime(data.dt),
    windSpeed: data.wind.speed,
  };
};

export const getWeatherForecastByCoords = async ({ lat, lon }) => {
  const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=6`;

  const response = await fetch(END_POINT);

  const data = await response.json();

  const forecast = [];

  data.list.forEach((item, idx) => {
    forecast.push({
      day: WEEK_DAYS[new Date(item.dt * 1000).getDay()],
      time: `${new Date(item.dt * 1000).getHours()}h`,
      temperature: Math.round(item.main.temp),
      icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${item.weather[0].icon}.svg`,
      description: item.weather[0].description,
    });
  });

  return forecast;
};
