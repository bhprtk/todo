import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';

export default () => {

	function* worker(value) {
		const results = yield call(getTodo, value);
		yield put(actions.selectedDayTodos(results));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.SELECT_DAY);
			const { selectedDay } = input;
			yield call(worker, selectedDay);
		}
	}

	return {
		watcher,
		worker
	}
}
