import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = () => {
  return (
    <form className="Search">
      <button type="button">
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </button>
      <input type="text" placeholder="e.g. London" />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default Search;
