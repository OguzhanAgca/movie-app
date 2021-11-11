import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import errorReducer from "./errorReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  error: errorReducer,
  list: listReducer,
});

export default rootReducer;
