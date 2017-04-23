import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDayTodos } = this.props;
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

				<h3 className="text-center">Today's Progress</h3>

				<div className="progress">
					<div
						className="progress-bar"
						style={{width: displayPercentage}}>
						{displayPercentage}
					</div>
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedDayTodos: state.selectedDayTodos.toJS().selectedDayTodos
	}
}

export default connect(mapStateToProps)(ProgressBar);
