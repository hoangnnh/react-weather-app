import React from "react";
import ForecastItem from "./ForecastItem/ForecastItem";

import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  const weatherForecast = props.data.map((item, idx) => {
    return (
      <ForecastItem key={idx} data={item} isCelsiusUnit={props.isCelsiusUnit} />
    );
  });

  return <div className="WeatherForecast">{weatherForecast}</div>;
};

export default WeatherForecast;
