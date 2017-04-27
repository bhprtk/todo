import { createReducer } from 'reduxsauce';
import { Map, fromJS } from 'immutable';
import types from '../actions/types';

const INITIAL_STATE = Map();

export function loginUser(state = INITIAL_STATE, action) {
	const { displayName, email, photoURL, uid } = action.user;
	let currentUser = { displayName, email, photoURL, uid };
	return state.merge(currentUser);
}

export function noUser(state = INITIAL_STATE, action) {
	let currentUser = {
		displayName: ''
	}
	return state.merge(currentUser);
}

const ACTION_HANDLERS = {
	[types.LOGIN_USER]: loginUser,
	[types.NO_USER]: noUser
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
