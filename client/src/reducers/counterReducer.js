import { INCREMENT,DECREMENT } from "../actions/ActionsType";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
