import { FETCH_LIST_DETAILS } from "../actions/types";

const initialState = {
  list: {},
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_DETAILS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
