import { RETURN_ERROR, CLEAR_ERRORS } from "./types";

export const returnError = (msg, status, id = null) => {
  return {
    type: RETURN_ERROR,
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
