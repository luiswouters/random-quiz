import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, CLICK_UPDATE_VALUE, CLICK_UPDATE_SUCCESS, FINALIZE_QUIZ, RESET_QUIZ } from './actionTypes';
export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});
export const clickButtonSuccess = value => ({
  type: CLICK_UPDATE_SUCCESS,
  newValue: value
});
export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS_REQUEST
});
export const fetchQuestionsSuccess = ({data}) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: {data}
});
export const finalizeQuiz = result  => ({
  type: FINALIZE_QUIZ,
  payload: result,
});
export const resetQuiz = ()  => ({
  type: RESET_QUIZ,
});