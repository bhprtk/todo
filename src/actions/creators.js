import types from './types';

export const addShareCount = uid => ({
	type: types.ADD_SHARE_COUNT,
	uid
})

export const addToDo = (data) => ({
	type: types.ADD_TODO,
	data
})

export const deleteTodo = data => ({
	type: types.DELETE_TODO,
	data
})

export const editTodo = data => ({
	type: types.EDIT_TODO,
	data
})

export const loginUser = data => ({
	type: types.LOGIN_USER,
	data
})

export const logout = () => ({
	type: types.LOGOUT_USER
})

export const markDone = (data) => ({
	type: types.MARK_DONE,
	data
})

export const selectDay = data => ({
	type: types.SELECT_DAY,
	data
})

export const selectedDayTodos = todos => ({
	type: types.SELECTED_DAY_TODOS,
	todos
})
