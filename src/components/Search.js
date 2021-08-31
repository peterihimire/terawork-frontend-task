import React from "react";
import "./Search.css";
import searchIcon from "../assets/Search-Black.svg";

const Search = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <div className="input-with-icon">
            {/* <i className="fas fa-key"></i> */}
            {/* <FaCircle className="circle-icon" /> */}
            <div>
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search"
              id="search"
              name="search"
            />
            {/* <i className="fas fa-eye"></i> */}
            {/* <FaSearch className="search-icon" /> */}
          </div>
          <div>
            <button>search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
