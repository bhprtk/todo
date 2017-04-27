import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { selectedDay, uid } = data;
		const results = yield call(getTodo, selectedDay, uid);
		yield put(actions.selectedDayTodos(results));
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
