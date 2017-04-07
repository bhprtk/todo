import { fork } from 'redux-saga/effects';
import addTodo from './addTodoSaga';
import getTodo from './getTodoSaga';

export default function* root() {
	yield fork(addTodo().watcher);
	yield fork(getTodo().watcher);
}
