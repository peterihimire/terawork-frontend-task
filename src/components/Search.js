import React from "react";
import "./Search.css";
import searchIcon from "../assets/Search-Black.svg";
import searchIconWhite from "../assets/Search-White.svg";

const Search = () => {
  return (
    <div className="search">
      <form>
        <div className="form-group">
          <div className="input-with-icon">
            <div className="search-icon-div">
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </div>
            <input type="text" placeholder="Search" id="search" name="search" />
          </div>
          <div className="hidden-xs visible-xl">
            <button className="btn search-btn">Search</button>
          </div>
          <div className="visible-xs hidden-xl">
            <button className="btn search-btn">
              <img src={searchIconWhite} alt="search icon" className="search-icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
