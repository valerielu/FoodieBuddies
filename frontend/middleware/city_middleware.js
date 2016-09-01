import * as Actions from "../actions/city_actions.js";
import * as API from "../util/city_api_util.js";

const CityMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case Actions.CityConstants.REQUEST_ALL_CITIES:
      success = (cities) => {
        dispatch(Actions.receiveAllCities(cities));};
      API.requestAllCities(success);
      return next(action);
    default:
      return next(action);
  }
};

export default CityMiddleware;
