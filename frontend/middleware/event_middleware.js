import {EventConstants, receiveAllEvents, subtractEvent, addEventAttendee, subtractEventAttendee, receiveSingleEvent, receiveEventErrors} from "../actions/event_actions.js";
import {requestAllEvents, deleteEvent, attendEvent, unattendEvent, createEvent, updateEvent} from "../util/event_api_util.js";
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
      case EventConstants.CREATE_EVENT:
        error = (errors) => {
          dispatch(receiveEventErrors(errors));
        };
        success = (event) => {
          dispatch(receiveSingleEvent(event));
          hashHistory.push("/dashboard");
        };
        createEvent(action.event, success, error);
        break;
      case EventConstants.UPDATE_EVENT:
        error = (errors) => {
          dispatch(receiveEventErrors(errors));
        };
        success = (event) => {
          dispatch(receiveSingleEvent(event));
        };
        updateEvent(action.eventId, action.event, success, error);
        break;
    default:
      return next(action);
  }
};

export default EventMiddleware;
