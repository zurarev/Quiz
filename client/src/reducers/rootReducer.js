import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import answersReducer from "./answersReducers";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  questionsReducer,
  answersReducer,
  counterReducer
});

export default rootReducer;
