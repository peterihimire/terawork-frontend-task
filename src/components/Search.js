import React, { useCallback, useEffect } from "react";
import "./Search.css";
import searchIcon from "../assets/Search-Black.svg";
import searchIconWhite from "../assets/Search-White.svg";
import { useSelector, useDispatch } from "react-redux";
import { searchValiu, getMovies } from "../redux/actions/movieActions";

const Search = () => {
  let searchVal = useSelector((state) => {
    return state.allMovies.searchValue;
  });
  console.log(searchVal);
  const dispatch = useDispatch();

  // const { allMovies } = myState;
  // console.log(allMovies);

  const handleSearchInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    console.log(e);
    // UPDATE STATE WITH VALUE TO BE USED IN THE SEARCH
    dispatch(searchValiu(value));
    // searchVal = value;
    // console.log(searchVal);
    // return value;
  };
  // console.log(searchOnChange());
  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d3baa22`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);
  console.log(searchVal);

  const getMovieSearch = useCallback(() => {
    fetch(`https://www.omdbapi.com/?s=${searchVal}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          console.log(jsonResponse.Search);
          // setMovies(jsonResponse.Search);
          // setLoading(false);
          dispatch(getMovies(jsonResponse.Search));
        } else {
          // setErrorMessage(jsonResponse.Error);
          // setLoading(false);
        }
      });
  }, [searchVal, dispatch]);

  useEffect(() => {
    getMovieSearch();
  }, [getMovieSearch]);

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
              onChange={handleSearchInput}
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
