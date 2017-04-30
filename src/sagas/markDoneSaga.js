import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { markDone } from '../services/firebase_config';
import { markDoneStorage } from '../services/sessionStorage_config';
import * as actions from '../actions/creators';

export default () => {

	function* worker(data) {
		markDone(data);
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.MARK_DONE);
			const { data } = input;
			if(data.uid) {
				yield call(worker, data);
			} else {
				const results = markDoneStorage(data);
				yield put(actions.selectedDayTodos(results));
			}
		}
	}

	return {
		watcher,
		worker
	}

}
