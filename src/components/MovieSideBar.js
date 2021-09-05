import React from "react";
import "./MovieSideBar.css";
import movieImg from "../assets/img.png";
import SideNav from "./SideNav";

const MovieSideBar = (props) => {
  // console.log(props);
  return (
    <>
      {/* <MovieSideBar /> */}
      {/* <SideNav /> */}
      <div className="mobile-nav-overlay" />
      <div id="page-container" className="App">
        <div id="content-wrapper">
          <SideNav />
          <div className="mobile-nav-overlay" />
          {/* <MovieSideBar /> */}
          <div className="main-content">
            <div className="main-content-container">
              {/* <div className="mobile-nav-overlay " /> */}
              <div className="mobile-nav show-nav">
                <div className="mobile-nav-header">
                  <h4>BENKIH</h4>
                </div>
                <div>
                  <div className="movie-sidebar-img">
                    <img src={movieImg} alt="movie art" />
                  </div>
                </div>
                <ul className="mobile-nav-links">
                  <li className="mobile-nav-item">
                    <a className="navbar-single-link" href="/">
                      Task 1
                    </a>
                  </li>
                  <li className="mobile-nav-item">
                    <a className="navbar-single-link" href="/">
                      Task 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSideBar;
