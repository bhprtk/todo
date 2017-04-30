import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');


export function addTodoStorage(todo, selectedDay) {
	const day = convertDayToKey(selectedDay);
	const time = moment().format('HH:mm:ss');

	let storage;
	if(!sessionStorage.length) {
		storage = {};
		storage[day] = {};
	} else {
		storage = JSON.parse(sessionStorage.getItem('todo'));
	}
	storage[day][time] = todo;
	sessionStorage.setItem('todo', JSON.stringify(storage));
}

export function getTodoStorage(selectedDay) {
	const day = convertDayToKey(selectedDay);
	let results = JSON.parse(sessionStorage.getItem('todo'));
	return results[day];
}
