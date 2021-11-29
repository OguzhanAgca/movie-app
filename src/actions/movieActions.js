import {
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  SINGLE_MOVIE,
  EMPTY_CURRENT_MOVIE,
} from "./types";
import * as api from "../api/index";
import { clearErrors, returnError } from "./errorActions";

export const getMovies = () => async (dispatch) => {
  await api
    .getMovies()
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data.items,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
    });
};

export const addMovie = (movieId) => async (dispatch) => {
  const movie = {
    media_id: movieId,
  };
  const body = JSON.stringify(movie);

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  await api
    .addMovie(body, config)
    .then((res) => {
      //! I call getMovies dispatch because API does not return to me added movie
      dispatch(getMovies());
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const searchMovie = (body) => async (dispatch) => {
  const movie = body.search;
  await api
    .searchMovie(movie)
    .then((res) => {
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const getMovieDetails = (movieId) => async (dispatch) => {
  await api
    .movieDetails(movieId)
    .then((res) => {
      dispatch({
        type: SINGLE_MOVIE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const removeMovie = (movieId) => async (dispatch) => {
  const body = {
    media_id: movieId,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const movie = JSON.stringify(body);

  await api
    .removeMovie(movie, config)
    .then(() => {
      dispatch({
        type: REMOVE_MOVIE,
        payload: movieId,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const emptyCurrentMovie = () => async (dispatch) => {
  await dispatch({ type: EMPTY_CURRENT_MOVIE });
};

export const getPopularMovies = () => async (dispatch) => {
  await api
    .getPopularMovies()
    .then((res) => {
      dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const getTopRatedMovies = () => async (dispatch) => {
  await api
    .getTopRatedMovies()
    .then((res) => {
      dispatch({
        type: FETCH_TOP_RATED_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const getUpcomingMovies = () => async (dispatch) => {
  await api
    .getUpcomingMovies()
    .then((res) => {
      dispatch({
        type: FETCH_UPCOMING_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};
