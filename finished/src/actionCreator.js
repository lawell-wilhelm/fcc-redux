import * as actions from "./actions";

export const loginUser = () => ({
  type: actions.LOGIN,
});

export const logoutUser = () => ({ type: actions.LOGOUT });

export const increment = () => ({
  type: actions.INCREMENT,
});

export const decrement = () => ({ type: actions.DECREMENT });
