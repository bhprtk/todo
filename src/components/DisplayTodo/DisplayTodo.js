import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualList from './IndividualList';

class DisplayTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDayTodos, selectedDay } = this.props;
		console.log ('selectedDayTodos:', selectedDayTodos)
		return (
			<div className="col-md-6 col-sm-6 col-xs-6">
				what
			</div>

		)
	}

}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS(),
		selectedDay: state.selectedDay.toJS()
	}
}

export default connect(mapStateToProps)(DisplayTodo);
