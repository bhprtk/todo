import { fork } from 'redux-saga/effects';
import addTodo from './addTodoSaga';
import deleteTodo from './deleteTodoSaga';
import editTodo from './editTodoSaga';
import getTodo from './getTodoSaga';
import markDone from './markDoneSaga';

export default function* root() {
	yield fork(addTodo().watcher);
	yield fork(deleteTodo().watcher);
	yield fork(editTodo().watcher);
	yield fork(getTodo().watcher);
	yield fork(markDone().watcher);
}
