import store from "./store";
import * as actionCreator from "./actionCreator";

store.subscribe(() => console.log("state changed:", store.getState()));

store.dispatch(actionCreator.loginUser());
store.dispatch(actionCreator.increment());
store.dispatch(actionCreator.logoutUser());
store.dispatch(actionCreator.decrement());
