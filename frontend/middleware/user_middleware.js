import {UserConstants, receiveSingleUser} from "../actions/user_actions.js";
import * as API from "../util/users_api_util.js";
import {logout, receiveCurrentUser, receiveErrors} from "../actions/session_actions.js";
import {hashHistory} from "react-router";

const UserMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case UserConstants.DELETE_ACCOUNT:
      success = () => {
        hashHistory.push("/");
      };
      dispatch(logout());
      API.deleteAccount(action.currentUser, success);
      break;
    case UserConstants.UPDATE_USER:
      success = (currentUser) => {
        dispatch(receiveCurrentUser(currentUser));
      };
      error = (errors) => {
        dispatch(receiveErrors(errors));};
      API.updateUser(action.host, action.currentUser, success, error);
      break;
    case UserConstants.REQUEST_SINGLE_USER:
      success = (user) => {
        dispatch(receiveSingleUser(user));
      };
      API.requestSingleUser(action.userId, success);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
