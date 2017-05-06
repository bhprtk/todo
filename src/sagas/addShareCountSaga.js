import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import { addShareCount, getShareCount } from '../services/firebase_config';

export default () => {

	function* worker(uid) {
		console.log ('uid:', uid)
		let shareCount = yield call(getShareCount, uid)
		if(!shareCount) {
			shareCount = 1;
		} else {
			shareCount++;
		}
		// console.log ('shareCount:', shareCount)
		addShareCount(shareCount, uid)
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.ADD_SHARE_COUNT);
			const { uid } = input;
			yield call(worker, uid);
		}
	}

	return {
		watcher,
		worker
	}
}
