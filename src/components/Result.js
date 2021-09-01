import React from "react";
import "./Result.css";
import movies from "../movie-items";
import MovieItem from "./MovieItem";

const Result = () => {
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
              <MovieItem key={movie.id} />
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
