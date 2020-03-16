import { fetchQuestionsReducer } from './fetchQuestionsReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  fetchQuestionsState: fetchQuestionsReducer,
  finalizeQuizState: fetchQuestionsReducer,
});