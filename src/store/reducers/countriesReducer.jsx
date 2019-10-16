import {
  FETCH_COUNTRIES,
  SERVER_REQUEST,
  GUESSED_BY_USER
} from "../actions/actionTypes";

const initialState = {
  data: {},
  isFetching: false,
  guessed: []
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
    case GUESSED_BY_USER:
      return {
        ...state,
        guessed: [...state.guessed, action.guess]
      };
    default:
      return state;
  }
};

export default countriesReducer;
