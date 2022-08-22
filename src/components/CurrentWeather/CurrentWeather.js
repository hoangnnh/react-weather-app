import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="CurrentWeather">
      <h1 className="CurrentWeather__location">Avtovo, RU</h1>
      <h2 className="CurrentWeather__time">Mon, Sep 21th</h2>
      <div className="CurrentWeather__columns">
        <div className="CurrentWeather__columns__left">
          <FontAwesomeIcon className="weatherIcon" icon={faCloud} />
          <div className="CurrentWeather__columns__left__right">
            <p className="temperature">13°</p>
            <p className="weatherDescription">Overcast Clouds</p>
          </div>
        </div>
        <div className="CurrentWeather__columns__right">
          <div className="CurrentWeather__columns__right__top row">
            <p className="feelsLike">
              <strong>13.5°</strong>
              <small>Feels Like</small>
            </p>
            <p className="windSpeed">
              <strong>6 m/s</strong>
              <small>Wind</small>
            </p>
            <p className="sunriseAt">
              <strong>03:42</strong>
              <small>Sunrise</small>
            </p>
          </div>
          <div className="CurrentWeather__columns__right__bottom row">
            <p className="clouds">
              <strong>100%</strong>
              <small>Clouds</small>
            </p>
            <p className="pressure">
              <strong>1008 mb</strong>
              <small>Pressure</small>
            </p>
            <p className="sunsetAt">
              <strong>16:00</strong>
              <small>Sunset</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
