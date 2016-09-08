import {EventConstants, receiveAllEvents} from "../actions/event_actions.js";
import merge from "lodash/merge";

const EventReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case EventConstants.RECEIVE_ALL_EVENTS:
      return action.events;

    case EventConstants.RECEIVE_SINGLE_EVENT:
      if (newState.eventErrors) {
        delete(newState.eventErrors) ;
      }
      return merge(newState, action.event);

    case EventConstants.SUBTRACT_EVENT:
      if (newState[action.eventId]) {
        delete(newState[action.eventId]);
        return newState;
      } else {
        return state;
      }

    case EventConstants.ADD_EVENT_ATTENDEE:
      if (newState[action.data.event_id]) {
        newState[action.data.event_id].attendees.push(action.data.user_id);
        return newState;
      } else {
        return state;
      }

    case EventConstants.SUBTRACT_EVENT_ATTENDEE:
      if (newState[action.eventId]) {
        let index = newState[action.eventId].attendees.indexOf(action.userId);
        newState[action.eventId].attendees.splice(index);
        return newState;
      } else {
        return state;
      }

    case EventConstants.RECEIVE_EVENT_ERRORS:

      newState["eventErrors"] = JSON.parse(action.errors.responseText);
      return merge(newState, action.event);

    default:
      return state;
  }
};

export default EventReducer;
