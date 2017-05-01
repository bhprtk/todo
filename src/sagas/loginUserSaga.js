import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/creators';
import { getTodo } from '../services/firebase_config';

export default () => {

	function* worker(data) {
		const { currentUser, selectedDay } = data;
		console.log('in loginUserSaga')
		getTodo(selectedDay, currentUser.uid)
			.then(function(res) {
				(function* (todos) {
					yield put(actions.selectedDayTodos(todos))
				})(res)
			})
			// .then(res => put(actions.selectedDayTodos(res)))
			.catch(err => console.log ('err:', err))
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
