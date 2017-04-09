import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { markDone } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		markDone(data);
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.MARK_DONE);
			const { data } = input;
			yield call(worker, data);
		}
	}

	return {
		watcher,
		worker
	}

}
