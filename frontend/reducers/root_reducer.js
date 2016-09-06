import SessionReducer from "./session_reducer.js";
import UserReducer from "./user_reducer.js";
import CityReducer from "./city_reducer.js";
import EventReducer from "./event_reducer.js";
import {combineReducers} from "redux";

const RootReducer = combineReducers(
  {
    session: SessionReducer,
    cities: CityReducer,
    events: EventReducer,
    users: UserReducer
  }
);

export default RootReducer;
