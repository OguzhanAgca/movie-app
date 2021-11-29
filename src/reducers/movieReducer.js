import {
  FETCH_MOVIES,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  SINGLE_MOVIE,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  EMPTY_CURRENT_MOVIE,
} from "../actions/types";

const initialState = {
  movies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  searchedMovies: null,
  currentMovie: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    //! I can not use this case because API does not return to me added movie
    /*
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies],
      };
    */
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
    case EMPTY_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: null,
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
