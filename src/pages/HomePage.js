import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import Title from "../components/Title";
// import Result from "../components/Result";
import "../components/MovieItem.css";
import "../components/Result.css";
import movies from "../movie-items";

import movieImg from "../assets/img.png";
import { Link, useHistory, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

// import Modal from "../components/Modal";
// import "../components/Modal.css";
import "../components/MovieSideBar.css";

import ReactDOM from "react-dom";
// import "./Backdrop.css";

// import { FaExclamationTriangle } from "react-icons/fa";

const HomePage = (props) => {
  console.log(props);
  let location = useLocation();
  let history = useHistory();
  console.log(location);
  console.log(history);

  // For Menu Handler
  // const [menuState, setMenuState] = useState({
  //   isOpen: false,
  // });

  // const openHandler = () => {
  //   setMenuState({
  //     isOpen: !menuState.isOpen,
  //   });
  // };
  // const closeHandler = () => {
  //   setMenuState({
  //     isOpen: false,
  //   });
  // };

  const [menuState, setMenuState] = useState(false);

  const openHandler = () => {
    setMenuState(true);
  };
  const closeHandler = () => {
    setMenuState(false);
  };

  return (
    <>
      <Route
        path={`${props.match.url}/:id`}
        render={() => {
          return (
            <>
              <div
                className={
                  menuState
                    ? "mobile-nav-overlay transparent-bcg"
                    : "mobile-nav-overlay"
                }
                // onClick={closeHandler}

                onClick={() => {
                  props.history.push(props.match.url) && closeHandler();
                }}
              />

              <div className={menuState ? "mobile-nav show-nav" : "mobile-nav"}>
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
        }}
      />

      <div id="page-container" className="App">
        <div id="content-wrapper">
          <SideNav />
          <div className="main-content">
            <div className="main-content-container">
              <Title title="Explore" />
              <Search />
              {/* <Result /> */}
              <div className="result">
                <div className="result-head">
                  <p>
                    Results for : <span>Mortal Kombat</span>
                  </p>
                </div>
                <div className="movie-list-grid">
                  {movies.map((movie) => {
                    return (
                      <div className="" key={movie.id}>
                        {/* <MovieItem key={movie.id} movie={movie} /> */}
                        <article className="movie-item">
                          <div className="movie-image-div">
                            <img src={movieImg} alt="movie item" />
                          </div>
                          <div className="movie-btn-div">
                            <Link
                              to={`${props.match.url}/${movie.id}`}
                              className="btn"
                              onClick={openHandler}
                            >
                              View
                            </Link>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  // const { movies } = state;
  return { state };
};
export default connect(mapStateToProps)(HomePage);

// {
//   ReactDOM.createPortal(
//     <div
//       className={
//         menuState ? "mobile-nav-overlay transparent-bcg" : "mobile-nav-overlay"
//       }
//       // onClick={closeHandler}

//       onClick={() => {
//         props.history.push(props.match.url) && closeHandler();
//       }}
//     />,
//     document.getElementById("transparentbcg-hook"),
//   );
// }
// {
//   ReactDOM.createPortal(
//     <div className={menuState ? "mobile-nav show-nav" : "mobile-nav"}>
//       <div className="mobile-nav-header">
//         <h4>BENKIH</h4>
//       </div>
//       <ul className="mobile-nav-links">
//         <li className="mobile-nav-item">
//           <a className="navbar-single-link" href="/">
//             Task 1
//           </a>
//         </li>
//         <li className="mobile-nav-item">
//           <a className="navbar-single-link" href="/">
//             Task 2
//           </a>
//         </li>
//       </ul>
//     </div>,
//     document.getElementById("slidepage-hook"),
//   );
// }
