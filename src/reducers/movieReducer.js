import {
  ADD_MOVIE,
  FETCH_MOVIES,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  SINGLE_MOVIE,
} from "../actions/types";

const initialState = {
  movies: [],
  searchedMovies: [],
  currentMovie: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    case SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        // eslint-disable-next-line eqeqeq
        movies: state.movies.filter((movie) => movie.id != action.payload),
        currentMovie: null,
      };
    default:
      return {
        ...state,
      };
  }
}
