import * as Actions from "../actions/user_actions.js";
import merge from "lodash/merge";

const preloadedState = {
  currentUser: null,
  errors: []
};

const UserReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
