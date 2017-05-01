import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { user, selectedDay } = data;
		const { uid } = user;
		let results = yield call(getTodo, selectedDay, uid)
		yield put(actions.selectedDayTodos(results));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.LOGIN_USER);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}
}
