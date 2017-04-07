import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { addTodo } from '../services/firebase_config';

export default () => {

	function* worker(value) {
		addTodo(value);
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.ADD_TODO);
			const { todo } = input;
			yield call(worker, todo);
		}
	}

	return {
		watcher,
		worker
	}
}
