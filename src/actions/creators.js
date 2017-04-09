import types from './types';

export const addToDo = (data) => ({
	type: types.ADD_TODO,
	data
})

export const markDone = (data) => ({
	type: types.MARK_DONE,
	data
})

export const selectDay = (selectedDay) => ({
	type: types.SELECT_DAY,
	selectedDay
})

export const selectedDayTodos = (todos) => ({
	type: types.SELECTED_DAY_TODOS,
	todos
})
