import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import todos from './todosReducer';
import selectedDay from './selectedDayReducer';
import selectedDayTodos from './selectedDayTodosReducer';

const rootReducer = combineReducers({
	currentUser,
	todos,
	selectedDay,
	selectedDayTodos
})

export default rootReducer;
