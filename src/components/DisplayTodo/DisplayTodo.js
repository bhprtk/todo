import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualList from './IndividualList';
import DeleteTodo from '../DeleteTodo';
import NoTodo from './NoTodo';

class DisplayTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDay } = this.props;
		const { selectedDayTodos } = this.props.selectedDayTodos;
		if(selectedDayTodos) {
			return (
				<div>
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

				</div>

			)
		} else {
			return (
				<NoTodo
					selectedDay={selectedDay}/>
			)
		}
	}

}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS(),
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

export default connect(mapStateToProps)(DisplayTodo);
