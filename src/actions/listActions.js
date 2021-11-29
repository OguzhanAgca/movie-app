import { FETCH_LIST_DETAILS } from "./types";
import { returnError } from "./errorActions";
import * as api from "../api/index";

export const getListDetails = () => async (dispatch) => {
  await api
    .getListDetails()
    .then((res) => {
      dispatch({
        type: FETCH_LIST_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err, err));
    });
};

export const removeMovieFromList = (movieId) => async (dispatch) => {
  const body = JSON.stringify({ media_id: movieId });
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  await api
    .removeMovieFromList(body, config)
    .then(() => dispatch(getListDetails()))
    .catch((err) => dispatch(returnError(err, err)));
};
