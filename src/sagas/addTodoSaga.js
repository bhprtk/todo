import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import actions from '../actions/creators';

export default () => {

	function* worker(value) {
		console.log ('value:', value)
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.ADD_TODO);
			const { todo } = input;
			yield call(worker, todo);
		}
	}

	return {
		watcher,
		worker
	}
}
