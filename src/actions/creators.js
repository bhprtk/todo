import types from './types';

export const addToDo = (todo) => ({
	type: types.ADD_TODO,
	todo
})
