import moment from 'moment';

const convertDayToKey = day => moment(day).format('MM-DD-YYYY');


export function addTodoStorage(todo, selectedDay) {
	const day = convertDayToKey(selectedDay);
	const time = moment().format('HH:mm:ss');

	let storage = JSON.parse(sessionStorage.getItem('todo'));

	if(!storage[day]) {
		storage[day] = {}
	}
	storage[day][time] = todo;
	sessionStorage.setItem('todo', JSON.stringify(storage));
	return storage[day];
}

export function deleteTodoStorage(todo, selectedDay, time) {
	const day = convertDayToKey(selectedDay);
	let storage = JSON.parse(sessionStorage.getItem('todo'));
	let selectedDayTodos = storage[day];
	delete selectedDayTodos[time];
	if(!Object.keys(selectedDayTodos).length) {
		delete storage[day];
	}
	sessionStorage.setItem('todo', JSON.stringify(storage));
	if(storage[day]) {
		return storage[day];
	} else {
		return storage;
	}
}

export function editTodoStorage(todo, selectedDay, time) {
	const day = convertDayToKey(selectedDay);
	let storage = JSON.parse(sessionStorage.getItem('todo'));
	storage[day][time].todo = todo;
	sessionStorage.setItem('todo', JSON.stringify(storage));
	return storage[day];
}

export function getTodoStorage(selectedDay) {
	const day = convertDayToKey(selectedDay);
	if(!sessionStorage.length) {
		const storage = {};
		sessionStorage.setItem('todo', JSON.stringify(storage));
	}
	let results = JSON.parse(sessionStorage.getItem('todo'));
	return results[day];
}

export function markDoneStorage(data) {
	const { time, selectedDay, value } = data;
	const day = convertDayToKey(selectedDay);
	let storage = JSON.parse(sessionStorage.getItem('todo'));
	storage[day][time].done = value
	sessionStorage.setItem('todo', JSON.stringify(storage));
	return storage[day];
}
