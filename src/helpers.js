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
const API_KEY = process.env.REACT_APP_OWM_API_KEY;

export const convertTimeArgOfOwmApiToTime = (input) => {
  const time = new Date(input * 1000);

  const year = time.getFullYear();
  const weekday = WEEK_DAYS[time.getDay()];
  const month = MONTHS[time.getMonth()];
  const day = time.getDate();
  const hour = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
  const minute =
    time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;

  return { year, weekday, month, day, hour, minute };
};

export const getTimeFromOwmApi = (owmApiReturnedObj) => {
  const dtObj = convertTimeArgOfOwmApiToTime(owmApiReturnedObj.dt);
  const date = `${dtObj.weekday}, ${dtObj.month} ${dtObj.day} ${dtObj.year}`;
  const time = `${dtObj.hour}:${dtObj.minute}`;

  const sunriseAtObj = convertTimeArgOfOwmApiToTime(
    owmApiReturnedObj.sys.sunrise
  );
  const sunriseAt = `${sunriseAtObj.hour}:${sunriseAtObj.minute}`;

  const sunsetAtObj = convertTimeArgOfOwmApiToTime(
    owmApiReturnedObj.sys.sunset
  );
  const sunsetAt = `${sunsetAtObj.hour}:${sunsetAtObj.minute}`;

  return {
    date,
    time,
    sunriseAt,
    sunsetAt,
  };
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

export const getCurrentWeather = async (
  location = "",
  lat = null,
  lon = null
) => {
  let end_point;
  if (location.trim() !== "" && lat === null && lon === null) {
    end_point = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  } else if (location.trim() === "" && lat !== null && lon !== null) {
    end_point = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  }

  const response = await fetch(end_point);
  const data = await response.json();

  return {
    clouds: data.clouds.all,
    coord: data.coord,
    date: getTimeFromOwmApi(data).date,
    description: data.weather[0].description,
    feelsLike: Math.round(data.main.feels_like),
    iconCode: data.weather[0].id,
    location: `${data.name}, ${data.sys.country}`,
    pressure: data.main.pressure,
    sunriseAt: getTimeFromOwmApi(data).sunriseAt,
    sunsetAt: getTimeFromOwmApi(data).sunsetAt,
    temperature: Math.round(data.main.temp),
    time: getTimeFromOwmApi(data).time,
    windSpeed: data.wind.speed,
  };
};

export const getWeatherForecast = async (
  location = "",
  lat = null,
  lon = null
) => {
  let end_point;
  if (location.trim() !== "" && lat === null && lon === null) {
    end_point = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric&cnt=6`;
  } else if (location.trim() === "" && lat !== null && lon !== null) {
    end_point = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=6`;
  }

  const response = await fetch(end_point);
  const data = await response.json();
  const forecast = [];

  data.list.forEach((item, idx) => {
    const timeObj = convertTimeArgOfOwmApiToTime(item.dt);
    forecast.push({
      weekday: timeObj.weekday,
      time: timeObj.hour,
      temperature: Math.round(item.main.temp),
      iconCode: item.weather[0].id,
      description: item.weather[0].description,
    });
  });

  return forecast
};
