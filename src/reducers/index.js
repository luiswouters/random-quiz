import { fetchQuestionsReducer } from './fetchQuestionsReducer';
import { clickReducer } from './clickReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  fetchQuestionsState: fetchQuestionsReducer,
  clickState: clickReducer,
  //otherState: otherReducer
});