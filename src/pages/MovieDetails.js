import React from "react";
import SideNav from "../components/SideNav";
import MovieInfoBlock from "../components/MovieInfoBlock";

const MovieDetails = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <SideNav />
        <div className="main-content">
          <div className="main-content-container">
            <MovieInfoBlock />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MovieDetails;
