import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(reducer, applyMiddleware(sagaMiddleware));
	store.runSaga = sagaMiddleware.run(sagas);
	return store;
}
