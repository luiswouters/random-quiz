import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { FETCH_QUESTIONS_REQUEST, CLICK_UPDATE_SUCCESS } from '../actions/actionTypes';
import * as api from '../api';

// create a generator function
function* fetchData() {
    // try to make the api call
    try {
        // yield the api responsse into data
        const data = yield call(api.getData);
        yield put(actions.fetchQuestionsSuccess( {data: data.data} ))
    }catch(e) {
        console.log(e);
    }
}
function* watchFetchData() {
    // create watcher of fetchData function
    yield takeEvery(FETCH_QUESTIONS_REQUEST, fetchData);
}

const DataSagas = [
    fork(watchFetchData)
];

export default DataSagas;