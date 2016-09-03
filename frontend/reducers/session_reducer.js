import * as Actions from "../actions/session_actions.js";
import merge from "lodash/merge";

const preloadedState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = preloadedState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case Actions.SessionConstants.RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case Actions.SessionConstants.RECEIVE_ERRORS:
    console.log(action.errors);
      newState.errors = JSON.parse(action.errors.responseText);
      return newState;
    case Actions.SessionConstants.LOGOUT:
      return preloadedState;
    default:
      return state;
  }
};

export default SessionReducer;
