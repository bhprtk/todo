import types from '../actions/types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import moment from 'moment';

const INITIAL_STATE = Map({
	selectedDay: moment().format()
});

export function selectDay(state = INITIAL_STATE, action) {
	const selectedDay = fromJS({selectedDay: action.selectedDay});
	return state.merge(selectedDay);
}

const ACTION_HANDLERS = {
	[types.SELECT_DAY]: selectDay
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
