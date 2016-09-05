import * as Actions from "../actions/city_actions.js";
import * as API from "../util/city_api_util.js";
import {hashHistory} from "react-router";

const CityMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case Actions.CityConstants.REQUEST_ALL_CITIES:
      success = (cities) => {
        dispatch(Actions.receiveAllCities(cities));};
      API.requestAllCities(success);
      break;
    case Actions.CityConstants.REQUEST_SINGLE_CITY:
      success = (city) => {
        dispatch(Actions.receiveSingleCity(city));
        // hashHistory.push(`/cities/${city.id}`);
      };
      API.requestSingleCity(action.cityId, success);
      break;
    default:
      return next(action);
  }
};

export default CityMiddleware;
