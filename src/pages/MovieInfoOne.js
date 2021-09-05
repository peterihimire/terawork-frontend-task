import React from "react";
import SideNav from "../components/SideNav";
import MovieSideBar from "../components/MovieSideBar";

import Search from "../components/Search";
import Title from '../components/Title'
import Result from "../components/Result";
// import { connect } from "react-redux";

const MovieInfoOne = () => {
  return (
    <>
      {/* <MovieSideBar /> */}
      <div id="page-container" className="App">
      <div id="content-wrapper">
        <SideNav />
        <div className="main-content">
          <div className="main-content-container">
            <Title title="Explore" />
            <Search />
            <Result />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
    </>
  );
};

export default MovieInfoOne;
