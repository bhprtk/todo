import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar';
import DisplayTodo from './DisplayTodo';

class Main extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<AddToDo />
					<Calendar />
				</div>

			</div>
		)
	}
}

export default Main;
