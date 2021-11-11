import { RETURN_ERROR, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case RETURN_ERROR:
      return {
        ...state,
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        msg: {},
        status: null,
        id: null,
      };
    default:
      return {
        ...state,
      };
  }
}
