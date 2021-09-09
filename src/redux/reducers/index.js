import { combineReducers } from "redux";

import { movieReducer } from "../reducers/movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
});

export default reducers;
