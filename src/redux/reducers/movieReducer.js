import { ActionTypes } from "../constants/action-types";
// import movieItems from "../../movie-items";

const initialState = {
  // movies: movieItems,
  searchValue: "",
  loading: true,
  movies: [],
  movie: "",
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
    default:
      return state;
  }
};
