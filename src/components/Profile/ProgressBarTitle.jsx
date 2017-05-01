import React, { Component } from 'react';
import moment from 'moment';

class ProgressBarTitle extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { totalTodos, todosDone } = this.props;

		let selectedDay = this.props.selectedDay;
		selectedDay = moment(selectedDay).format('dddd');

		const today = moment().format('dddd');
		let day;
		if(today === selectedDay) {
			day = 'Today'
		} else {
			day = selectedDay
		}

		let displayTasksDone;
		if(totalTodos) {
			if(todosDone === totalTodos) {
				displayTasksDone = 'All tasks done'
			} else {
				let tasksLeft = totalTodos - todosDone;
				displayTasksDone = `${tasksLeft} of ${totalTodos} tasks left`
			}
		} else {
			displayTasksDone = `No tasks added yet.`
		}

		return (
			<div className="title">
				<strong>{day}'s Progress -- </strong>
				<strong>{displayTasksDone}</strong>
			</div>
		)
	}
}

export default ProgressBarTitle;
