import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';
import { getTodoStorage } from '../services/sessionStorage_config';

export default () => {

	function* worker(data) {
		const { currentUser, selectedDay } = data;
		const { uid } = currentUser;
		let results;
		if(!currentUser.displayName) {
			results = getTodoStorage(selectedDay);
			yield put(actions.selectedDayTodos(results));
		} else {
			results = yield call(getTodo, selectedDay, uid)
			yield put(actions.selectedDayTodos(results));
		}
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.SELECT_DAY);
			const { data } = input;
			yield call(worker, data);

		}
	}

	return {
		watcher,
		worker
	}
}
