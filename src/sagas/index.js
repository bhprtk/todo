import { fork } from 'redux-saga/effects';
import addTodo from './addTodoSaga';

export default function* root() {
	yield fork(addTodo().watcher);
}
