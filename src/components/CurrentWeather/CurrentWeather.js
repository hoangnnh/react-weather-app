import React from "react";

import "./CurrentWeather.css";
import "../../assets/weather-icons/css/weather-icons.min.css";
import { convertFromCelsiusToFahrenheit } from "../../helpers";

const CurrentWeather = (props) => {
  const temperatureValue = props.isCelsiusUnit
    ? props.data.temperature
    : convertFromCelsiusToFahrenheit(props.data.temperature);
  const temperatureUnit = props.isCelsiusUnit ? "C" : "F";
  return (
    <div className="CurrentWeather">
      <h1 className="CurrentWeather__location">{props.data.location}</h1>
      <h2 className="CurrentWeather__time">{props.data.time}</h2>
      <h3 className="CurrentWeather__date">{props.data.date}</h3>
      <div className="CurrentWeather__columns">
        <div className="CurrentWeather__columns__left">
          <span className="icon">
            <i className={`wi wi-owm-${props.data.iconCode}`}></i>
          </span>
          <div className="CurrentWeather__columns__left__right">
            <p className="temperature">
              {temperatureValue}°{temperatureUnit}
            </p>
            <p className="weatherDescription">{props.data.description}</p>
          </div>
        </div>
        <div className="CurrentWeather__columns__right">
          <div className="CurrentWeather__columns__right__top row">
            <p className="feelsLike">
              <strong>{props.data.feelsLike}°C</strong>
              <small>Feels Like</small>
            </p>
            <p className="windSpeed">
              <strong>{props.data.windSpeed} m/s</strong>
              <small>Wind</small>
            </p>
            <p className="sunriseAt">
              <strong>{props.data.sunriseAt}</strong>
              <small>Sunrise</small>
            </p>
          </div>
          <div className="CurrentWeather__columns__right__bottom row">
            <p className="clouds">
              <strong>{props.data.clouds}%</strong>
              <small>Clouds</small>
            </p>
            <p className="pressure">
              <strong>{props.data.pressure} mb</strong>
              <small>Pressure</small>
            </p>
            <p className="sunsetAt">
              <strong>{props.data.sunsetAt}</strong>
              <small>Sunset</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
