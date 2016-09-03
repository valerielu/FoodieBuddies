import * as Actions from "../actions/user_actions.js";
import * as API from "../util/users_api_util.js";
import {logout} from "../actions/session_actions.js";
import {hashHistory} from "react-router";

const UserMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case Actions.UserConstants.DELETE_ACCOUNT:
      success = () => {
        hashHistory.push("/");
      };
      dispatch(logout());
      API.deleteAccount(action.currentUser, success);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
