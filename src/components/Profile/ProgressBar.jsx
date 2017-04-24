import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBarTitle from './ProgressBarTitle'

class ProgressBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDay, selectedDayTodos } = this.props;
		let todos;

		if(selectedDayTodos) {
			todos = Object.keys(selectedDayTodos);
		} else {
			todos = [];
		}

		const totalTodos = todos.length;
		let percentage, displayPercentage;
		let todosDone = 0;

		if(totalTodos) {
			todos.forEach(time => {
				if(selectedDayTodos[time].done) {
					todosDone++;
				}
			})
			percentage = Math.floor((todosDone / totalTodos) * 100);
			displayPercentage = String(percentage) + "%";
		} else {
			displayPercentage = "0%";
		}



		return (
			<div className="progress-bar-div">
				<ProgressBarTitle
					selectedDay={selectedDay}
					todosDone={todosDone}
					totalTodos={totalTodos}
					/>
				<div className="progress">
					<div
						className="progress-bar"
						style={{width: displayPercentage}}>
						<span>{displayPercentage}</span>
					</div>
				</div>


			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS().selectedDayTodos,
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

export default connect(mapStateToProps)(ProgressBar);
