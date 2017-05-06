import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar/Calendar';
import DisplayTodo from './DisplayTodo/DisplayTodo';
import NavBar from './NavBar';
import Profile from './Profile/Profile';
import TempMain from './Temp/TempMain';

class Main extends Component {
	render() {
		const { currentUser } = this.props;

		return (
			<div className="container">
				<NavBar />
				<div
					className="row"
					style={{paddingTop: 120}}>

					<DisplayTodo />
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
