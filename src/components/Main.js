import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar/Calendar';
import DisplayTodo from './DisplayTodo/DisplayTodo';
import NavBar from './NavBar';

class Main extends Component {
	render() {
		return (
			<div className="container">
				<NavBar />
				<div
					className="row"
					style={{paddingTop: 100}}>
					<DisplayTodo />
				</div>

			</div>
		)
	}
}

export default Main;
