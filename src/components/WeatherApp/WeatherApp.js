import React, { useState, useEffect } from "react";
import {
  convertDtFromOwmApiToDate,
  convertDtFromOwmApiToTime,
} from "../../helpers";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Search from "../Search/Search";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({
    current: {},
    forecast: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherByCityName = async (event) => {
    event.preventDefault();

    const END_POINT = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=944534fe78e33f3befcc1764e9c8e402&units=metric`;

    const response = await fetch(END_POINT);

    const data = await response.json();

    setWeatherData({
      current: {
        clouds: data.clouds.all,
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
      },
      forecast: {},
    });
  };

  const getWeatherCurrentLocation = () => {};

  // useEffect(() => {
  //   getWeatherByCityName('Ho Chi Minh')
  // }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [weatherData]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>Weather App</h1>
      <Search
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
        onSubmit={getWeatherByCityName}
        onGetWeatherCurrentLocation={getWeatherCurrentLocation}
      />
      <CurrentWeather data={weatherData.current} />
      <WeatherForecast />
    </>
  );
};

export default WeatherApp;
