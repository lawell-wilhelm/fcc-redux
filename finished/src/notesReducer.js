import * as actions from "./actions";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return action.text;
    default:
      return state;
  }
};

export default notesReducer;
