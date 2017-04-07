import { Map, fromJS } from 'immutable';
import types from '../actions/types';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = Map({
	selectedDayTodos: Map()
});

export function selectedDayTodos(state = INITIAL_STATE, action) {
	const selectedDayTodos = fromJS({selectedDayTodos: action.todos})
	return state.merge(selectedDayTodos);
}

const ACTION_HANDLERS = {
	[types.SELECTED_DAY_TODOS]: selectedDayTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
