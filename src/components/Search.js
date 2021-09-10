import React, { useEffect, useCallback } from "react";
import "./Search.css";
import searchIcon from "../assets/Search-Black.svg";
import searchIconWhite from "../assets/Search-White.svg";
import { useSelector } from "react-redux";

const Search = () => {
  let searchVal = useSelector((state) => {
    return state.allMovies.searchValue;
  });
  console.log(searchVal);
  // const { allMovies } = myState;
  // console.log(allMovies);

  const searchOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    console.log(e);
    searchVal = value;
    console.log(searchVal);
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d3baa22`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(searchVal);

  // const getMovies = () => {
  //   fetch(`http://www.omdbapi.com/?i=${searchVal}&apikey=5d3baa22`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  const getMovieSearch = useCallback(() => {
    fetch(`http://www.omdbapi.com/?i=${searchVal}&apikey=5d3baa22`)
      .then((response) => response.json())
      .then((data) => {
        console.log("This is the searched movie" + data);
        // setArtistAlbumPhotos(data);
      })
      // .then((albumData) => {
      //    console.log(albumData);
      // })
      .catch((err) => console.log(err));
  }, [searchVal]);

  // useEffect(() => {
  //   getMovies();
  // }, [getMovies]);
  return (
    <div className="search">
      <form onSubmit={getMovieSearch}>
        <div className="form-group">
          <div className="input-with-icon">
            <div className="search-icon-div">
              <img src={searchIcon} alt="search icon" className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search"
              id="search"
              name="search"
              onChange={searchOnChange}
            />
          </div>
          <div className="hidden-xs visible-xl">
            <button className="btn search-btn" type="submit">
              Search
            </button>
          </div>
          <div className="visible-xs hidden-xl">
            <button className="btn search-btn" type="submit">
              <img
                src={searchIconWhite}
                alt="search icon"
                className="search-icon"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
