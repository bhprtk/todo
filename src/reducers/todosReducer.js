import { Map } from 'immutable';
import types from '../actions/types';
import { createReducer } from 'reduxsauce';

const INITIAL_STATE = Map();

export function onChangeTodos(state = INITIAL_STATE, action) {
	const { todos } = action;
	
	return state.merge(todos);
}

const ACTION_HANDLERS = {
	[types.ON_CHANGE_TODOS]: onChangeTodos
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
