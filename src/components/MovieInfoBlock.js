import React from "react";
import "./MovieInfoBlock.css";
import { Link } from "react-router-dom";
import { FaClock, FaStar, FaPlay, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";


const MovieInfoBlock = (props) => {

  const movie = useSelector((state) => {
    return state.allMovies.movie;
  });

  const movies = useSelector((state) => {
    return state.allMovies.movies;
  });
  console.log("This is the latest single movie " + movie);


  return (
    <div className="movie-info-block">
      <div className="movie-info-block-main">
        <div className="movie-info-block-img">
          <img src={movie.Poster} alt="movie poster" />
        </div>
        <div className="movie-info-block-text">
          <div className="movie-info-block-detail">
            <h4>{movie.Title}</h4>
            <p>{movie.Plot}</p>
          </div>

          <div className="date-rate-time">
            <div className="movie-info-block-icon">
              <FaClock className="movie-info-icon" />
              <p>{movie.Released}</p>
            </div>
            <div className="movie-info-block-icon">
              <FaStar className="movie-info-icon" />
              <p>{movie.imdbRating}</p>
            </div>
            <div className="movie-info-block-icon">
              <FaPlay className="movie-info-icon" />
              <p>{movie.Runtime}</p>
            </div>
          </div>
          <div className="movie-info-block-btn-div">
            <button className="btn search-btn movie-info-btn">watch now</button>
            <div className="">
              <div className=" movie-heart-div">
                <FaHeart className="movie-info-icon movie-heart-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-info-block-similar">
        <h4>Similar Movies</h4>
        <div className="movie-list-grid">
          {movies.splice(1, 3).map((movie) => {
            return (
              <div className="" key={movie.imdbID}>
                {/* <MovieItem key={movie.id} movie={movie} /> */}
                <article className="movie-item" key={movie.imdbID}>
                  <div className="movie-image-div">
                    <img src={movie.Poster} alt="movie item" />
                  </div>
                  <div className="movie-btn-div">
                    <Link to="#" className="btn">
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
  );
};

export default MovieInfoBlock;
