import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');


export function addTodoStorage(todo, selectedDay) {
	console.log('here')
	const day = convertDayToKey(selectedDay);
	const time = moment().format('HH:mm:ss');

	let storage;
	console.log ('sessionStorage:', sessionStorage)
	if(!sessionStorage.length) {
		storage = {};
		storage[day] = {};
	} else {
		storage = JSON.parse(sessionStorage.getItem('todo'));
	}
	if(!storage[day]) {
		storage[day] = {}
	}
	storage[day][time] = todo;
	sessionStorage.setItem('todo', JSON.stringify(storage));
}

export function getTodoStorage(selectedDay) {
	const day = convertDayToKey(selectedDay);
	if(!sessionStorage.length) {
		const storage = {};
		sessionStorage.setItem('todo', JSON.stringify(storage));
	}
	let results = JSON.parse(sessionStorage.getItem('todo'));
	console.log ('results:', results)
	return results[day];
}
