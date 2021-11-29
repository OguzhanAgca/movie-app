import axios from "axios";

const API_KEY = "c7c4d5c47e7c4d699cc99b24dfa73872";
const SESSION_ID = "525e6cad4eee8615f42a8b91225014212aca2ea4";
const LIST_ID = "7112870";

//! MOVIE REQUESTS
export const getMovies = async () =>
  await axios.get(
    `https://api.themoviedb.org/3/list/${LIST_ID}?api_key=${API_KEY}&language=en-US`
  );

export const searchMovie = async (movie) =>
  await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=true`
  );

export const addMovie = async (movie, config) =>
  await axios.post(
    `https://api.themoviedb.org/3/list/${LIST_ID}/add_item?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    movie,
    config
  );

export const movieDetails = async (movieId) =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

export const removeMovie = async (movie, config) =>
  await axios.post(
    `https://api.themoviedb.org/3/list/${LIST_ID}/remove_item?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    movie,
    config
  );

export const getPopularMovies = async () =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

export const getTopRatedMovies = async () =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

export const getUpcomingMovies = async () =>
  await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );

//! LIST REQUESTS
export const getListDetails = async () =>
  await axios.get(
    `https://api.themoviedb.org/3/list/${LIST_ID}?api_key=${API_KEY}&language=en-US`
  );

export const removeMovieFromList = async (movieId, config) =>
  await axios.post(
    `https://api.themoviedb.org/3/list/${LIST_ID}/remove_item?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    movieId,
    config
  );
