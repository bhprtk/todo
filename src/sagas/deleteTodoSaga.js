import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { deleteTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, time } = data;
		deleteTodo(todo, selectedDay, time);
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.DELETE_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}

}
