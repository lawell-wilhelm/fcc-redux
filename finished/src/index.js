import store from "./store";
import * as actionCreator from "./actionCreator";

store.subscribe(() =>
  console.log("authentication status changed:", store.getState())
);

store.dispatch(actionCreator.loginUser());
store.dispatch(actionCreator.logoutUser());
