import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { addTodoTemp } from '../actions/tempActions';
import { addTodo } from '../services/firebase_config';
import { addTodoStorage } from '../services/sessionStorage_config';
import * as actions from '../actions/creators';

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
			const results = addTodoStorage(newData, selectedDay)
			yield put(actions.selectedDayTodos(results));
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
