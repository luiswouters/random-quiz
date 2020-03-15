import { FETCH_QUESTIONS_REQUEST } from '../actions/actionTypes';
const initialState = {
  newValue: 'x'
};
export const fetchQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};