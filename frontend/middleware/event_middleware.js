import {EventConstants, receiveAllEvents} from "../actions/event_actions.js";
import {requestAllEvents} from "../util/event_api_util.js";
import {hashHistory} from "react-router";

const EventMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case EventConstants.REQUEST_ALL_EVENTS:
      success = (events) => {
        dispatch(receiveAllEvents(events));};
      requestAllEvents(success);
      break;
    default:
      return next(action);
  }
};

export default EventMiddleware;
