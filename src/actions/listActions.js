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
      dispatch(returnError(err.response.data, err.response.status));
    });
};
