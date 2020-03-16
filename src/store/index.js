import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);