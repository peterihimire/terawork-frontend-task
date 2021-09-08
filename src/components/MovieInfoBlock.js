import React from "react";
import "./MovieInfoBlock.css";
import movieImg from "../assets/img.png";
import { FaClock, FaStar, FaPlay, FaHeart } from "react-icons/fa";

const MovieInfoBlock = () => {
  return (
    <div className="movie-info-block">
      <div className="movie-info-block-main">
        <div className="movie-info-block-img">
          <img src={movieImg} alt="movie poster" />
        </div>
        <div className="movie-info-block-text">
          <div className="movie-info-block-detail">
            <h4>Mortal Kombat</h4>
            <p>
              This movie is for the lover of mortal Kombat. It is refreshing to
              watchFind our taxis near you for affordable interstate transports.
              This movie is for the lover of mortal Kombat. It is refreshing to
              watchFind our taxis near you for affordable interstate transports
            </p>
          </div>

          <div className="date-rate-time">
            <div className="movie-info-block-icon">
              <FaClock className="movie-info-icon" />
              <p>23 April 2021</p>
            </div>
            <div className="movie-info-block-icon">
              <FaStar className="movie-info-icon" />
              <p>6.2</p>
            </div>
            <div className="movie-info-block-icon">
              <FaPlay className="movie-info-icon" />
              <p>1hr 50mins</p>
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
      </div>
    </div>
  );
};

export default MovieInfoBlock;
