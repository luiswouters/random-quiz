import { FETCH_QUESTIONS_SUCCESS, FINALIZE_QUIZ, RESET_QUIZ } from '../actions/actionTypes';
const initialState = {
  newValue: 'x',
  questionList: [],
  quizState: 'initial',
  userCorrectAnswers: 0,
  userWrongAnswers: 0,
  userQuestionsAnswered: 0,
  finalScore: 0,
};
export const fetchQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionList: action.payload.data.results,
        quizState: 'question'
      };
      case FINALIZE_QUIZ:
        return {
          ...state,
          userCorrectAnswers: action.payload.userCorrectAnswers,
          userWrongAnswers: action.payload.userWrongAnswers,
          userQuestionsAnswered: action.payload.userQuestionsAnswered,
          finalScore: action.payload.finalScore,
          quizState: 'result'
        };
        case RESET_QUIZ:
          return {
            ...state,
            userCorrectAnswers: 0,
            userWrongAnswers: 0,
            userQuestionsAnswered: 0,
            finalScore: 0,
            quizState: 'question'
          };
    default:
      return state;
  }
};