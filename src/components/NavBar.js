import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddToDo from './AddToDo'
import Calendar from './Calendar/Calendar';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { currentUser } = this.props;
		if(Object.keys(currentUser).length) {
			return (
				<nav
					className="row navbar navbar-default navbar-fixed-top">
					<div
						className="container">
						<AddToDo />
						<Calendar
							currentUser={currentUser}/>

					</div>
				</nav>
			)
		} else {
			return (
				<div>
					loading
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

export default connect(mapStateToProps)(NavBar);
