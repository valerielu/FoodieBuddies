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
      newState.errors = [];
      newState.currentUser = action.currentUser;
      if (action.currentUser.is_host && !action.currentUser.profile_pic_url)
      action.currentUser.profile_pic_url = "https://robohash.org/autvoluptatemvoluptatum.png?size=250x250&set=set1";
      return newState;
    case Actions.SessionConstants.RECEIVE_ERRORS:
      if (action.errors) {
        newState.errors = JSON.parse(action.errors.responseText);
      } else {
        newState.errors = [];
      }
      return newState;
    case Actions.SessionConstants.LOGOUT:
      return preloadedState;
    default:
      return state;
  }
};

export default SessionReducer;
