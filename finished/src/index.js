import store from "./store";
import * as actionCreator from "./actionCreator";

store.dispatch(actionCreator.loginUser());

const currentState = store.getState();

console.log(currentState);
