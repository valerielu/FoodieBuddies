import SessionReducer from "./session_reducer.js";
import UserReducer from "./user_reducer.js"; //not using this now yet since this doesnt need to update state;
import CityReducer from "./city_reducer.js";
import EventReducer from "./event_reducer.js";
import {combineReducers} from "redux";

const RootReducer = combineReducers(
  {
    session: SessionReducer,
    cities: CityReducer,
    events: EventReducer
  }
);

export default RootReducer;
