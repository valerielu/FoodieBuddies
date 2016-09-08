import {CityConstants} from "../actions/city_actions.js";
import {EventConstants} from "../actions/event_actions.js";
import merge from "lodash/merge";

const CityReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case CityConstants.RECEIVE_ALL_CITIES:
      newState["allcities"] = action.cities;
      return newState;

    case CityConstants.RECEIVE_SINGLE_CITY:
      newState["city"] = action.city;
      return newState;

    case EventConstants.SUBTRACT_EVENT:
      if (newState["city"]) {
        delete(newState["city"]["events"][action.eventId]);
        return newState;
      } else {
        return state;
      }

    case EventConstants.ADD_EVENT_ATTENDEE:
      // if (newState["city"]) {
      //   newState["city"]["events"][action.data.event_id].attendees.push(action.data.user_id);
      //   return newState;
      // } else {
      //   return state;
      // }
      if (window.location.hash.includes("dashboard")) {
        return state;
      } else {
        newState["city"]["events"][action.data.event_id].attendees.push(action.data.user_id);
        return newState;
      }

    case EventConstants.SUBTRACT_EVENT_ATTENDEE:
      // if (newState["city"]) {
      //   let index = newState["city"]["events"][action.eventId].attendees.indexOf(action.userId);
      //   newState["city"]["events"][action.eventId].attendees.splice(index);
      //   return newState;
      // } else {
      //   return state;
      // }
      if (window.location.hash.includes("dashboard")) {
        return state;
      } else {
        let index = newState["city"]["events"][action.eventId].attendees.indexOf(action.userId);
        newState["city"]["events"][action.eventId].attendees.splice(index);
        return newState;
      }

    default:
      return state;
  }
};

export default CityReducer;
