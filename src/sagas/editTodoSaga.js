import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { editTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, time, uid } = data;
		editTodo(todo, selectedDay, time, uid);
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.EDIT_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}

}
