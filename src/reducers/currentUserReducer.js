import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';
import types from '../actions/types';

const INITIAL_STATE = Map();

export function loginUser(state = INITIAL_STATE, action) {
	const { displayName, email, photoURL } = action.user;
	let currentUser = { displayName, email, photoURL };
	return state.merge(currentUser);
}

export function logoutUser(state = INITIAL_STATE, actions) {
	return state;
}

const ACTION_HANDLERS = {
	[types.LOGIN_USER]: loginUser,
	[types.LOGOUT_USER]: logoutUser
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
