import firebase from 'firebase';
import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');

export function addTodo(todo, selectedDay) {
	const day = moment(selectedDay).format('MM-DD-YYYY');
	const now = moment().format('HH:mm:ss');
	firebase
		.database()
		.ref(`${day}/${now}`)
		.set(todo)
}

export function deleteTodo(todo, selectedDay, time) {
	const day = convertDayToKey(selectedDay);
	firebase
		.database()
		.ref(`${day}/${time}`)
		.remove()
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

export function markDone(data) {
	const { time, selectedDay, value } = data;
	const date = moment(selectedDay).format('MM-DD-YYYY');
	const updates = {};
	updates[`${date}/${time}/done`] = value;
	firebase
		.database()
		.ref()
		.update(updates)
}
