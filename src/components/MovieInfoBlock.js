import React from "react";
import "./MovieInfoBlock.css";
import { FaClock, FaStar, FaPlay } from "react-icons/fa";

const MovieInfoBlock = () => {
  return (
    <div className="movie-info-block">
      <div className="movie-info-block-main">
        <div className="movie-info-block-img">
          <img src="" alt="movie poster" />
        </div>
        <div className="movie-info-text">
          <h4>Mortal Kombat</h4>
          <p>
            This movie is for the lover of mortal Kombat. It is refreshing to
            watchFind our taxis near you for affordable interstate transports
          </p>
          <div className="date-rate-time">
            <div className="">
              <FaClock className="movie-info-icon" />
              <p>23 April 2021</p>
            </div>
            <div className="">
              <FaStar className="movie-info-icon" />
              <p>6.2</p>
            </div>
            <div className="">
              <FaPlay className="movie-info-icon" />
              <p>1hr 50mins</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-info-block-similar">
        <h4>Similar Movies</h4>
      </div>
    </div>
  );
};

export default MovieInfoBlock;