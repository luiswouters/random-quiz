import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FINALIZE_QUIZ, RESET_QUIZ } from './actionTypes';
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