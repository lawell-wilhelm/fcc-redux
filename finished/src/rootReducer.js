import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
});

export default rootReducer;
