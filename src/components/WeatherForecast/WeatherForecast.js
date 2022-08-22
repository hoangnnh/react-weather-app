import React from "react";
import ForecastItem from "./ForecastItem/ForecastItem";

import "./WeatherForecast.css";

const WeatherForecast = () => {
  return (
    <div className="WeatherForecast">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </div>
  );
};

export default WeatherForecast;
