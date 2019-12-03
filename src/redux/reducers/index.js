import { combineReducers } from "redux";
import emails from "./emailReducer";

const rootReducer = combineReducers({
  emails
});

export default rootReducer;
