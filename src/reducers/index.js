import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import todos from './todosReducer';
import selectedDay from './selectedDayReducer';
import selectedDayTodos from './selectedDayTodosReducer';
import shareCount from './shareCountReducer';
import tempTodos from './tempTodosReducer';

const rootReducer = combineReducers({
	currentUser,
	todos,
	selectedDay,
	selectedDayTodos,
	shareCount,
	tempTodos
})

export default rootReducer;
