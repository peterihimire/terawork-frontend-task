import { ActionTypes } from "../constants/action-types";
// import movieItems from "../../movie-items";

const initialState = {
  // movies: movieItems,
  searchValue: "",
  loading: true,
  movies: [],
  movie: {},
  randomMovies: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  console.log(state);
  console.log(type);
  console.log(payload);

  switch (type) {
    case ActionTypes.GET_MOVIES:
      console.log(state);
      return { ...state, movies: payload };
    case ActionTypes.SEARCH_VALIU:
      console.log(state);
      return { ...state, searchValue: payload };
    case ActionTypes.SELECTED_MOVIE:
      console.log(state);
      return { ...state, movie: payload };
    case ActionTypes.GET_RANDOM_MOVIES:
      console.log(state);
      return { ...state, randomMovies: payload };
    default:
      return state;
  }
};
