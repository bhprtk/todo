import { combineReducers } from 'redux';
import todos from './todosReducer';
import selectedDay from './selectedDayReducer';
import selectedDayTodos from './selectedDayTodosReducer';

const rootReducer = combineReducers({
	todos,
	selectedDay,
	selectedDayTodos
})

export default rootReducer;
