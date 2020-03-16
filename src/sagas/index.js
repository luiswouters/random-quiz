import { all } from 'redux-saga/effects';
import DataSagas from '../generators';

// combine all sagas
export default function* rootSaga() {
    yield all([
        ...DataSagas,
    ]);
}