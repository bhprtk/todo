import firebase from 'firebase';
import moment from 'moment';

export function addTodo(todo) {
	const today = moment().format('MM-DD-YYYY');
	const now = moment().format('HH:mm:ss');
	firebase
		.database()
		.ref(`${today}/${now}`)
		.set(todo)
}
