import { QUESTION_LOAD_SUCCESS } from "../actions/ActionsType";

const initialState = {
  questions: []
};

const questionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUESTION_LOAD_SUCCESS:
      return {
        questions: payload
      };
    default:
      return state;
  }
};

export default questionsReducer;
