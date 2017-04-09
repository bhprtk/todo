import types from './types';

export const addToDo = (data) => ({
	type: types.ADD_TODO,
	data
})

export const onChangeTodos = (todos) => {
	console.log ('todos:', todos)
}

export const selectDay = (selectedDay) => ({
	type: types.SELECT_DAY,
	selectedDay
})

export const selectedDayTodos = (todos) => ({
	type: types.SELECTED_DAY_TODOS,
	todos
})
