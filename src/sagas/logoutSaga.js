import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { logout } from '../services/firebase_config';

export default () => {

	function* worker() {
		logout();
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.LOGOUT_USER);
			yield call(worker);
		}
	}

	return {
		watcher,
		worker
	}
}
