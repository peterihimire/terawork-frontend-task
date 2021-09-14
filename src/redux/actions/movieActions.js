import { ActionTypes } from "../constants/action-types";

export const getMovies = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};

export const searchValiu = (value) => {
  return {
    type: ActionTypes.SEARCH_VALIU,
    payload: value,
  };
};
