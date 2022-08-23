import React, { useState, useEffect } from "react";
import {
  getCurrentWeatherByCityName,
  getCurrentWeatherByCoords,
  getMyLocationCoord,
  getWeatherForecastByCityName,
  getWeatherForecastByCoords,
} from "../../helpers";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Search from "../Search/Search";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (event) => {
    event.preventDefault();

    const currentWeather = await getCurrentWeatherByCityName(location);
    const weatherForecast = await getWeatherForecastByCityName(location);

    setWeatherData({ current: currentWeather, forecast: weatherForecast });
  };

  const getWeatherCurrentLocation = async () => {
    const coords = await getMyLocationCoord();

    console.log(coords)

    const currentWeather = await getCurrentWeatherByCoords(coords);
    const weatherForecast = await getWeatherForecastByCoords(coords);

    setWeatherData({
      current: currentWeather,
      forecast: weatherForecast,
    });
  };

  useEffect(() => {
    getWeatherCurrentLocation();
  });

  return weatherData === null ? (
    <h3>
      Refresh the page and enable Position permission for this page to continue
      using
    </h3>
  ) : (
    <>
      <h1>Weather App</h1>
      <Search
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
        onSubmit={getWeatherData}
        onGetWeatherCurrentLocation={getWeatherCurrentLocation}
      />
      <CurrentWeather data={weatherData.current} />
      <WeatherForecast data={weatherData.forecast} />
    </>
  );
};

export default WeatherApp;
