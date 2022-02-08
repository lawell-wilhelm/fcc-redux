const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return { login: true };
  }
};

export default reducer;
