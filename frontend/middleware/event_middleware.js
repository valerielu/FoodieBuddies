import {EventConstants, receiveAllEvents, subtractEvent, addEventAttendee, subtractEventAttendee} from "../actions/event_actions.js";
import {requestAllEvents, deleteEvent, attendEvent, unattendEvent} from "../util/event_api_util.js";
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
      
      case EventConstants.DELETE_EVENT:
        success = () => {
          dispatch(subtractEvent(action.eventId));};
        deleteEvent(action.eventId, success);
        break;

      case EventConstants.ATTEND_EVENT:
        success = (data) => {
          dispatch(addEventAttendee(data));
        };
        attendEvent(action.attendance, success);
        break;

      case EventConstants.UNATTEND_EVENT:
        success = () => {
          dispatch(subtractEventAttendee(action.eventId, action.userId));
        };
        unattendEvent(action.eventId, success);
        break;

    default:
      return next(action);
  }
};

export default EventMiddleware;
