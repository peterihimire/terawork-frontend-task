import React from "react";
import "./MovieItem.css";
import movieImg from "../assets/img.png";
import { Link, useHistory } from "react-router-dom";

const MovieItem = (props) => {
  console.log(props);
  const history = useHistory();
  console.log(history);

  console.log(props.match);
  const { movie } = props;
  return (
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
  );
};

export default MovieItem;
