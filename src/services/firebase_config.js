import firebase from 'firebase';
import moment from 'moment';

export function addTodo(todo, selectedDay) {
	const day = moment(selectedDay).format('MM-DD-YYYY');
	const now = moment().format('HH:mm:ss');
	firebase
		.database()
		.ref(`${day}/${now}`)
		.set(todo)
}

export function getTodo(selectedDay) {
	const date = moment(selectedDay).format('MM-DD-YYYY');
	return (
		firebase
		.database()
		.ref(`${date}`)
		.once('value')
		.then(snap => snap.val())
	)
}
