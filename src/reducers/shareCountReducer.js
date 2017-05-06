import { createReducer } from 'reduxsauce';
import types from '../actions/types';

const INITIAL_STATE = 0;

export function getShareCount(state = INITIAL_STATE, action) {
	const { shareCount } = action;
	return shareCount;
}

const ACTION_HANDLERS = {
	[types.GET_SHARE_COUNT]: getShareCount
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
