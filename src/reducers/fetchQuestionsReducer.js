import { FETCH_QUESTIONS_SUCCESS } from '../actions/actionTypes';
const initialState = {
  newValue: 'x'
};
export const fetchQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questionList: action.payload.data.results
      };
    default:
      return state;
  }
};