import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = (props) => {
  return (
    <>
      <form className="Search" onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Search for a city, e.g. London"
          value={props.value}
          onChange={props.onChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <button
        id="getWeatherCurrentLocation"
        type="button"
        onClick={props.onGetWeatherCurrentLocation}
      >
        <FontAwesomeIcon icon={faLocationCrosshairs} />{" "}
        <span>Your Location</span>
      </button>
    </>
  );
};

export default Search;
