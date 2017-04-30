import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';
import { getTodoStorage } from '../services/sessionStorage_config';

export default () => {

	function* worker(data) {
		const { currentUser, selectedDay } = data;
		let results;
		if(!currentUser.displayName) {
			results = getTodoStorage(selectedDay);
		} else {
			results = getTodo(selectedDay, currentUser.uid);
		}
		yield put(actions.selectedDayTodos(results));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.SELECT_DAY);
			const { data } = input;
			console.log ('data:', data)
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}
}
