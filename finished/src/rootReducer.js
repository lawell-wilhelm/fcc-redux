import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
  notes: notesReducer,
});

export default rootReducer;
