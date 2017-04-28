import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar/Calendar';
import DisplayTodo from './DisplayTodo/DisplayTodo';
import NavBar from './NavBar';
import Profile from './Profile/Profile';
import DisplayTempTodo from './Temp/DisplayTempTodo';

class Main extends Component {
	render() {
		const { currentUser } = this.props;
		let displayTodo;
		if(currentUser.displayName) {
			displayTodo = <DisplayTodo />
		} else {
			displayTodo = <DisplayTempTodo />
		}
		return (
			<div className="container">
				<NavBar />
				<div
					className="row"
					style={{paddingTop: 120}}>
					{displayTodo}
					<Profile />
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

export default connect(mapStateToProps)(Main);
