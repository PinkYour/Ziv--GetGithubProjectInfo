import { combineReducers } from "redux";
import user from "./user";
import admin from "./admin";
import upName from "./upName";

export default combineReducers({user,admin,upName})