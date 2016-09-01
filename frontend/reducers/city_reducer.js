import * as Actions from "../actions/city_actions.js";
import merge from "lodash/merge";

const CityReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case Actions.CityConstants.RECEIVE_ALL_CITIES:
      return action.cities;
    case Actions.CityConstants.RECEIVE_SINGLE_CITY:
      newState["cityDetails"] = action.city;
      return newState;
    default:
      return state;
  }
};

export default CityReducer;
