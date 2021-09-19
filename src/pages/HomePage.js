import React, { useEffect, useCallback } from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import Title from "../components/Title";
// import Result from "../components/Result";
import "../components/MovieItem.css";
import "../components/Result.css";
// import movies from "../movie-items";
import logo from "../assets/Logo.svg";
// import movieImg from "../assets/img.png";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../components/MovieSideBar.css";
import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { selectedMovie } from "../redux/actions/movieActions";

const HomePage = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  // console.log(props);
  console.log("This is the props" + props);
  // let movieId = props.location && props.location.pathname.splice(1, 8);
  let movieId = props.location && props.location.pathname;
  console.log(movieId.slice(8));
  // let location = useLocation();
  // let history = useHistory();
  // console.log(location);
  // console.log(history);
  // console.log(movies[4]);

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
  const movies = useSelector((state) => {
    // return state.allMovies.movies;
    return state.allMovies.movies;
  });
  const searchValue = useSelector((state) => {
    return state.allMovies.searchValue;
  });

  const movie = useSelector((state) => {
    return state.allMovies.movie;
  });
  console.log("This are my movies" + movies);

  const getSingleMovie = useCallback(() => {
    fetch(`http://www.omdbapi.com/?i=${movieId.slice(8)}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          console.log("This is the single movie" + jsonResponse);
          dispatch(selectedMovie(jsonResponse));
        } else {
          // setErrorMessage(jsonResponse.Error);
          // setLoading(false);
        }
      });
  }, [movieId, dispatch]);
  // tt7818310
  useEffect(() => {
    getSingleMovie();
  }, [getSingleMovie]);

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
                      <FaArrowLeft
                        className="arrow-icon"
                        onClick={() => {
                          props.history.push(props.match.url);
                        }}
                      />
                    </div>
                    <div className="slide-movie-img">
                      <img src={movie.Poster} alt="poster" />
                    </div>

                    <div className="slidepage-text">
                      <h4>{movie.title}</h4>
                      <p>{movie.Plot}</p>
                    </div>

                    <div className="slidepage-btn-div">
                      <Link
                        to={`/movie-details/${movieId.slice(8)}`}
                        className="btn search-btn slidepage-btn"
                      >
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
              <div className="main-home-logo hidden-xl visible-xs visible-md">
                <img src={logo} alt="logo" />
              </div>
              <Title title="Explore" />
              <Search />
              {/* <Result /> */}
              <div className="result">
                <div className="result-head">
                  <p>
                    Results for : <span>{searchValue}</span>
                  </p>
                </div>
                <div className="movie-list-grid">
                  {movies.map((movie) => {
                    return (
                      <div className="" key={movie.imdbID}>
                        {/* <MovieItem key={movie.id} movie={movie} /> */}
                        <article className="movie-item">
                          <div className="movie-image-div">
                            <img src={movie.Poster} alt="movie item" />
                          </div>
                          <div className="movie-btn-div">
                            <Link
                              to={`${props.match.url}/${movie.imdbID}`}
                              className="btn"
                              onClick={getSingleMovie}
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
