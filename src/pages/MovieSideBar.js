import React from "react";
// import SideNav from "../components/SideNav";
// import Search from "../components/Search";
// import Title from "../components/Title";
// import Result from "../components/Result";
import "../components/MovieSideBar.css";

const MovieSideBar = () => {
  return (
    <>
      {/* <div id="page-container" className="App">
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
      </div> */}

      <div
        // className={
        //   props.openState
        //     ? "mobile-nav-overlay transparent-bcg"
        //     : "mobile-nav-overlay"
        // }
        // onClick={props.closeMenu}
        className={"mobile-nav-overlay transparent-bcg"}
      />
      <div
        // className={props.openState ? "mobile-nav show-nav" : "mobile-nav"}
        className="mobile-nav show-nav"
      >
        <div className="mobile-nav-header">
          <h4>BENKIH</h4>
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
