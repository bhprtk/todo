import firebase from 'firebase';
import moment from 'moment';

export function addTodo(todo) {
	const today = moment().format('LL');
	const now = moment().format('LTS');
	console.log ('today:', today)
	console.log ('todo:', todo)
	firebase
		.database()
		.ref(`${today}/${now}`)
		.set(todo)
}
