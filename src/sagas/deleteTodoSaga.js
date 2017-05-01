import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { deleteTodo } from '../services/firebase_config';
import { deleteTodoStorage } from '../services/sessionStorage_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, time, uid, displayName } = data;
		if(displayName) {
			deleteTodo(todo, selectedDay, time, uid);
		} else {
			let results = deleteTodoStorage(todo, selectedDay, time);
			yield put(actions.selectedDayTodos(results));
		}
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
