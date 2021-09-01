import React from "react";
import "./MovieItem.css";
import movieImg from "../assets/img.png";

const MovieItem = () => {
  return (
    <article className="movie-item">
      <div className="movie-image-div">
        <img src={movieImg} alt="movie item" />
      </div>
      <div className="movie-btn-div">
        <button className="btn">View</button>
      </div>
    </article>
  );
};

export default MovieItem;
