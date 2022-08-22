import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = () => {
  return (
    <>
      <form className="Search">
        <input type="text" placeholder="Search for a city, e.g. London" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <button id="getWeatherCurrentLocation" type="button">
        <FontAwesomeIcon icon={faLocationCrosshairs} />{" "}
        <span>Your Location</span>
      </button>
    </>
  );
};

export default Search;
