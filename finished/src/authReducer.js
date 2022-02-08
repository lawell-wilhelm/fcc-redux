import * as actions from "./actions";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, authenticated: true };
    case actions.LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
