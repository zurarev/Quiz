import { getQuestions, getAnswer } from "../api/api";
import {
  QUESTION_LOAD_SUCCESS,
  SET_ANSWER,
  INCREMENT,
  DECREMENT
} from "./ActionsType";

export const loadQuestions = () => async dispatch => {
  try {
    const questions = await getQuestions();
    dispatch({
      type: QUESTION_LOAD_SUCCESS,
      payload: questions
    });
  } catch (err) {
    console.log(err);
  }
};

export const setAnswer = (question, answerValue) => async dispatch => {
  try {
    const { answer } = await getAnswer(question);
    dispatch({
      type: SET_ANSWER,
      payload: { question: question, answer: answer.id === answerValue }
    });
  } catch (err) {
    console.log(err);
  }
};

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
