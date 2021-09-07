import React from "react";
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
import "../components/MovieSideBar.css";
import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
import { FaArrowLeft } from "react-icons/fa";

const HomePage = (props) => {
  console.log(props);
  let location = useLocation();
  let history = useHistory();
  console.log(location);
  console.log(history);
  console.log(movies[4]);

  // const [menuState, setMenuState] = useState(false);

  // const openHandler = () => {
  //   setMenuState(true);
  // };
  // const closeHandler = () => {
  //   setMenuState(false);
  // };

  // const slideInPage = useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("has to work after 5 secs.");
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* THIS LAUNCHES THE SLIDE-PAGE AS A SUB-ROUTE OF THE MOVIE ROUTE */}
      <Route
        path={`${props.match.url}/:id`}
        render={() => {
          return (
            <>
              {ReactDOM.createPortal(
                <div
                  className={
                    `${props.match.url}/:id`
                      ? "mobile-nav-overlay transparent-bcg"
                      : "mobile-nav-overlay"
                  }
                  // onClick={closeHandler}

                  // className={
                  //   menuState
                  //     ? "mobile-nav-overlay transparent-bcg"
                  //     : "mobile-nav-overlay"
                  // }
                  onClick={() => {
                    props.history.push(props.match.url);
                  }}
                />,
                document.getElementById("transparentbcg-hook"),
              )}
              {ReactDOM.createPortal(
                // <CSSTransition
                //   in={menuState}
                //   mountOnEnter
                //   unmountOnExit
                //   timeout={200}
                //   classNames="modally"
                // >
                <div
                  className={
                    `${props.match.url}/:id` ? "modally show-nav" : "modally"
                  }
                  // className="modally"
                  // className={menuState ? "modally show-nav" : "modally"}
                >
                  <div className="slidepage">
                    <div className="arrow-icon-div">
                      <FaArrowLeft className="arrow-icon" />
                    </div>
                    <div className="slide-movie-img">
                      <img src={movieImg} alt="poster" />
                    </div>

                    <div className="slidepage-text">
                      <h4>{movies[4].name}</h4>
                      <p>{movies[4].description}</p>
                    </div>

                    <div className="slidepage-btn-div">
                      <Link to="/" className="btn search-btn slidepage-btn">
                        Watch
                      </Link>
                    </div>
                  </div>
                </div>,
                // </CSSTransition>,
                document.getElementById("slidepage-hook"),
              )}
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
                              // onClick={openHandler}
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
