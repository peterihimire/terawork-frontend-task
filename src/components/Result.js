import React from "react";
import "./Result.css";
import movies from "../movie-items";
// import MovieItem from "./MovieItem";
import "./MovieItem.css";
import movieImg from "../assets/img.png";
import { Link } from "react-router-dom";

const Result = (props) => {
  // console.log(movies);

  return (
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
                  <Link to={`${props.match}/${movie.id}`} className="btn">
                    View
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );

  // return movies.map((movie) => {
  //   return (
  //     <div className="movie-list-grid" key={movie.id}>
  //       <MovieItem key={movie.id} />
  //     </div>
  //   );
  // });
};

export default Result;
