import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { editTodo } from '../services/firebase_config';
import { editTodoStorage } from '../services/sessionStorage_config';

export default () => {

	function* worker(data) {
		const { todo, selectedDay, time, uid, displayName } = data;
		if(displayName) {
			editTodo(todo, selectedDay, time, uid);
		} else {
			let results = editTodoStorage(todo, selectedDay, time);
			console.log ('results:', results)
			yield put(actions.selectedDayTodos(results));
		}
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
