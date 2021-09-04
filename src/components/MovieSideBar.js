import React from "react";
import "./MovieSideBar.css";
import movieImg from "../assets/img.png";

const MovieSideBar = (props) => {
  console.log(props);
  return (
    <>
      <div
        // className={
        //   props.openState
        //     ? "mobile-nav-overlay transparent-bcg"
        //     : "mobile-nav-overlay"
        // }
        // onClick={props.closeMenu}

        className="mobile-nav-overlay transparent-bcg"
      />
      <div
        // className={props.openState ? "mobile-nav show-nav" : "mobile-nav"}
        className="mobile-nav"
      >
        <div className="mobile-nav-header">
          <h4>BENKIH</h4>
        </div>
        <div>
          <div className="">
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
    </>
  );
};

export default MovieSideBar;
