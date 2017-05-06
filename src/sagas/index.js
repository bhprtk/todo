import { fork } from 'redux-saga/effects';
import addShareCount from './addShareCountSaga';
import addTodo from './addTodoSaga';
import deleteTodo from './deleteTodoSaga';
import editTodo from './editTodoSaga';
import getTodo from './getTodoSaga';
import loginUser from './loginUserSaga';
import logout from './logoutSaga';
import markDone from './markDoneSaga';
import noUser from './noUserSaga';

export default function* root() {
	yield fork(addShareCount().watcher);
	yield fork(addTodo().watcher);
	yield fork(deleteTodo().watcher);
	yield fork(editTodo().watcher);
	yield fork(getTodo().watcher);
	yield fork(loginUser().watcher);
	yield fork(logout().watcher);
	yield fork(markDone().watcher);
	yield fork(noUser().watcher);
}
