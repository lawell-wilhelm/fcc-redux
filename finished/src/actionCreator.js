import * as actions from "./actions";

export const loginUser = () => ({
  type: actions.LOGIN,
});

export const logoutUser = () => ({ type: actions.LOGOUT });
