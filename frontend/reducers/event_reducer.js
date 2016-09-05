import {EventConstants, receiveAllEvents} from "../actions/event_actions.js";
import merge from "lodash/merge";

const EventReducer = (state = {}, action) => {
  switch (action.type) {
    case EventConstants.RECEIVE_ALL_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default EventReducer;
