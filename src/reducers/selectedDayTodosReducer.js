import { Map, fromJS, toJS } from 'immutable';
import types from '../actions/types';
import { createReducer } from 'reduxsauce';
import moment from 'moment';

const INITIAL_STATE = Map({
	selectedDayTodos: Map()
});

export function selectedDayTodos(state = INITIAL_STATE, action) {
	console.log('in selectedDayTodos')
	const selectedDayTodos = fromJS({selectedDayTodos: action.todos})
	return state.merge(selectedDayTodos);
}

export function onChangeTodos(state = INITIAL_STATE, action) {
	const { todos, selectedDay } = action.data;
	const day = moment(selectedDay).format('MM-DD-YYYY');
	const selectedDayTodos = fromJS({selectedDayTodos: todos[day]});
	return state.merge(selectedDayTodos);
}

const ACTION_HANDLERS = {
	[types.SELECTED_DAY_TODOS]: selectedDayTodos,
	[types.ON_CHANGE_TODOS]: onChangeTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
