import {applyMiddleware} from "redux";
import SessionMiddleware from "./session_middleware.js";
import UserMiddleware from "./user_middleware.js";
import CityMiddleware from "./city_middleware.js";

const RootMiddleware = applyMiddleware(SessionMiddleware, UserMiddleware, CityMiddleware);

export default RootMiddleware;
