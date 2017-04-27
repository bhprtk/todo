import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar/Calendar';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav
				className="row navbar navbar-default navbar-fixed-top">
				<div
					className="container">
					<AddToDo />
					<Calendar />

				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

export default connect(mapStateToProps)(NavBar);
