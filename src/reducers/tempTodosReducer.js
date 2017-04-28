import types from '../actions/types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import moment from 'moment';

const INITIAL_STATE = Map();

export function addTodoTemp(state = INITIAL_STATE, action) {
	const { data } = action;
	const day = moment(data.selectedDay).format('MM-DD-YYYY');
	const now = moment().format('HH:mm:ss');
	let tempTodos = {};
	tempTodos[day] = {};
	tempTodos[day][now] = data.newData;
	return state.merge(tempTodos);
}

const ACTION_HANDLERS = {
	[types.ADD_TODO_TEMP]: addTodoTemp
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
