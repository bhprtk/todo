import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualList from './IndividualList';

class DisplayTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDay } = this.props;
		const { selectedDayTodos } = this.props.selectedDayTodos;
		// console.log ('selectedDayTodos:', selectedDayTodos)
		if(selectedDayTodos) {
			return (
				<div
					className="col-md-6 col-sm-6 col-xs-6 list-group todo-group">
					{Object
						.keys(selectedDayTodos)
						.sort()
						.map((time, index) =>
						<IndividualList
							key={index}
							selectedDay={selectedDay}
							time={time}
							todo={selectedDayTodos[time]} />
					)}
				</div>

			)
		} else {
			return (
				<div></div>
			)
		}
	}

}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS(),
		selectedDay: state.selectedDay.toJS()
	}
}

export default connect(mapStateToProps)(DisplayTodo);
