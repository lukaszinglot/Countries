import { FETCH_COUNTRIES, SERVER_REQUEST } from "../actions/actionTypes";

const initialState = {
  data: {},
  isFetching: false
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default countriesReducer;
