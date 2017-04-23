import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBarTitle from './ProgressBarTitle'

class ProgressBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDay, selectedDayTodos } = this.props;
		console.log ('selectedDayTodos:', selectedDayTodos)
		if(selectedDayTodos) {
			const todos = Object.keys(selectedDayTodos);

			const totalTodos = todos.length;
			let todosDone = 0;

			todos.forEach(time => {
				if(selectedDayTodos[time].done) {
					todosDone++;
				}
			})

			const percentage = Math.floor((todosDone / totalTodos) * 100);
			const displayPercentage = String(percentage) + "%";
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

		} else {
			console.log('here')
			return (
				<div>
					what
				</div>

			)
		}
	}
}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS().selectedDayTodos,
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

export default connect(mapStateToProps)(ProgressBar);
