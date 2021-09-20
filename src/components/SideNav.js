import React from "react";
import logo from "../assets/Logo.svg";
import "./SideNav.css";
import searchIcon from "../assets/Search-White.svg";
// import heartIcon from "../assets/Heart.svg";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const SideNav = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav-container">
        <div className="sidenav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidenav-main">
          <ul className="sidenav-links">
            <li className="sidenav-item">
              <div className="sidenav-icon-div">
                <img src={searchIcon} alt="search-logo" />
              </div>
              <NavLink
                activeClassName="active"
                className="sidenav-single-link"
                to="/"
              >
                search
              </NavLink>
            </li>
            <li className="sidenav-item">
              <div className="sidenav-icon-div">
                <FaHeart className="sidenav-heart-icon" />
              </div>
              <NavLink
                activeClassName="active"
                className="sidenav-single-link"
                to="/"
              >
                watchlist
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
