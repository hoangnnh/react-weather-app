import React, { useState, useEffect } from "react";
import {
  getCurrentWeather,
  getMyLocationCoord,
  getWeatherForecast,
} from "../../helpers";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Search from "../Search/Search";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const current = await getCurrentWeather(location);
    const forecast = await getWeatherForecast(location);

    setWeatherData({ current: current, forecast: forecast });
  };

  const getWeatherCurrentLocation = async () => {
    const coords = await getMyLocationCoord();

    const current = await getCurrentWeather("", coords.lat, coords.lon);
    const forecast = await getWeatherForecast(
      "",
      coords.lat,
      coords.lon
    );

    setWeatherData({
      current: current,
      forecast: forecast,
    });
  };

  useEffect(() => {
    getWeatherCurrentLocation();
  }, []);

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
        onSubmit={(event) => {
          event.preventDefault();
          getWeatherData();
        }}
        onGetWeatherCurrentLocation={getWeatherCurrentLocation}
      />
      <CurrentWeather data={weatherData.current} />
      <WeatherForecast data={weatherData.forecast} />
    </>
  );
};

export default WeatherApp;
