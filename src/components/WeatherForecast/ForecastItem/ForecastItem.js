import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

import './ForecastItem.css'

const ForecastItem = () => {
  return (
    <div className="ForecastItem">
      <h2 className="dayOfWeek">Mon</h2>
      <FontAwesomeIcon className="weatherIcon" icon={faCloudRain} />
      <p className="temperature">16°</p>
    </div>
  );
};

export default ForecastItem;
