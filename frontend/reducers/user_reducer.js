import {UserConstants} from "../actions/user_actions.js";
import merge from "lodash/merge";

const UserReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case UserConstants.RECEIVE_SINGLE_USER:
      newState["host"] = action.user;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
