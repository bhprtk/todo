import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { addTodoTemp } from '../actions/tempActions';
import { addTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, uid } = data;
		const newData = {
			todo,
			done: false
		}
		if(uid) {
			addTodo(newData, selectedDay, uid);
		} else {
			yield put(addTodoTemp({ newData, selectedDay }))
		}
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.ADD_TODO);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}
}
