import * as Actions from "../actions/user_actions.js";
import * as API from "../util/users_api_util.js";
import {logout} from "../util/session_api_util.js";

const UserMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case Actions.UserConstants.DELETE_ACCOUNT:
      success = (currentUser) => {
        dispatch(logout());};
      API.deleteAccount(action.currentUser, success);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
