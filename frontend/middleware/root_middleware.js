import {applyMiddleware} from "redux";
import SessionMiddleware from "./session_middleware.js";
import UserMiddleware from "./user_middleware.js";
import CityMiddleware from "./city_middleware.js";
import EventMiddleware from "./event_middleware.js";
import logger from "redux-logger";

const RootMiddleware = applyMiddleware(logger(), SessionMiddleware, UserMiddleware, CityMiddleware, EventMiddleware);

export default RootMiddleware;
