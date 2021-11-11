import {
  FETCH_MOVIES,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  SINGLE_MOVIE,
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
    .then(() => {
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
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
      dispatch(returnError(err.response.data, err.response.status));
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
      dispatch(returnError(err.response.data, err.response.status));
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
      dispatch(returnError(err.response.data, err.response.status));
    });
};
