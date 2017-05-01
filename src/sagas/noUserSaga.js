import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodoStorage } from '../services/sessionStorage_config';

export default () => {

	function* worker(selectedDay) {
		let results = getTodoStorage(selectedDay);
		yield put(actions.selectedDayTodos(results));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.NO_USER);
			const { selectedDay } = input;
			yield call(worker, selectedDay);

		}
	}

	return {
		watcher,
		worker
	}
}
