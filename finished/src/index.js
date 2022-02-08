import store from "./store";
import { loginAction } from "./actionCreator";

store.dispatch(loginAction());

const currentState = store.getState();

console.log(currentState);
