import { combineReducers } from 'redux';
import todos from './todosReducer';
import selectedDay from './selectedDayReducer';

const rootReducer = combineReducers({
	todos,
	selectedDay
})

export default rootReducer;
