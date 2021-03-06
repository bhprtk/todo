import firebase from 'firebase';
import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');

export function addShareCount(shareCount, uid) {
	firebase
		.database()
		.ref(`${uid}/shareCount`)
		.set(shareCount)
}

export function addTodo(todo, selectedDay, uid) {
	const day = moment(selectedDay).format('MM-DD-YYYY');
	const now = moment().format('HH:mm:ss');
	firebase
		.database()
		.ref(`${uid}/${day}/${now}`)
		.set(todo)
}

export function deleteTodo(todo, selectedDay, time, uid) {
	const day = convertDayToKey(selectedDay);
	firebase
		.database()
		.ref(`${uid}/${day}/${time}`)
		.remove()
}

export function editTodo(todo, selectedDay, time, uid) {
	const day = convertDayToKey(selectedDay);
	let updates = {};
	updates[`${uid}/${day}/${time}/todo`] = todo;
	firebase
		.database()
		.ref()
		.update(updates)
}

export function getShareCount(uid) {
	return (
		firebase
		.database()
		.ref(`${uid}/shareCount`)
		.once('value')
		.then(snap => snap.val())
	)
}

export function getTodo(selectedDay, uid) {
	const date = moment(selectedDay).format('MM-DD-YYYY');
	let data;
	return (
		firebase
			.database()
			.ref(`${uid}/${date}`)
			.once('value')
			.then(snap => snap.val())
			// console.log ('data:', data)
		)
}

export function logout() {
	firebase
		.auth()
		.signOut()
		.then(() => console.log ('logout successful'))
		.catch(error => console.log ('error:', error))
}

export function markDone(data) {
	const { time, selectedDay, value, uid } = data;
	const date = moment(selectedDay).format('MM-DD-YYYY');
	let updates = {};
	updates[`${uid}/${date}/${time}/done`] = value;
	firebase
		.database()
		.ref()
		.update(updates)
}
