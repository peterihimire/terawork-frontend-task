import React from "react";
import "./MovieItem.css";
import movieImg from "../assets/img.png";
import { Link } from "react-router-dom";

const MovieItem = () => {
  return (
    <article className="movie-item">
      <div className="movie-image-div">
        <img src={movieImg} alt="movie item" />
      </div>
      <div className="movie-btn-div">
        <Link to="movie-sidbar-one/" className="btn">
          View
        </Link>
      </div>
    </article>
  );
};

export default MovieItem;
