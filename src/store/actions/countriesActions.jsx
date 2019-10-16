import baseUrl from "../../api/apiBaseUrl";
import { FETCH_COUNTRIES, SERVER_REQUEST } from "./actionTypes";

export const getServersRequest = () => ({
  type: SERVER_REQUEST
});

export const fetchCountries = data => ({
  type: FETCH_COUNTRIES,
  data
});

export const getCountriesList = () => (dispatch, getState) => {
  if (!getState().countries.isFetching) {
    dispatch(getServersRequest());
    baseUrl.get("").then(({ data }) => {
      dispatch(fetchCountries(data));
    });
  }
};
