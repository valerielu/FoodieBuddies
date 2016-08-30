import * as Actions from "../actions/session_actions.js";
import * as API from "../util/session_api_util.js";

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case Actions.SessionConstants.LOGIN:
      success = (currentUser) => {
        dispatch(Actions.receiveCurrentUser(currentUser));};
      error = (errors) => {
        dispatch(Actions.receiveErrors(errors));};
      API.login(action.credentials, success, error);
      break;
    case Actions.SessionConstants.LOGOUT:
      success = () => (next(action));
      API.logout(success);
    case Actions.SessionConstants.SIGNUP:
      success = (currentUser) => {
        dispatch(Actions.receiveCurrentUser(currentUser));};
      error = (errors) => {
        dispatch(Actions.receiveErrors(errors));};
      API.signup(action.credentials, success, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
