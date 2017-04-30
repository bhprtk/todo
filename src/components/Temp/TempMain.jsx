import { connect } from 'react-redux';
import React, { Component } from 'react';
import DisplayTempTodos from './DisplayTempTodos';
import NoTodo from '../DisplayTodo/NoTodo';

class TempMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempTodos: {}
		}

		this.markDone = this.markDone.bind(this);
	}

	componentWillReceiveProps(newProps) {
		console.log('now')
		let tempTodos = this.state.tempTodos;
		const date = Object.keys(newProps.tempTodos)[0];
		console.log ('date:', date)
		if(date) {
			const time = Object.keys(newProps.tempTodos[date])[0];
			if(!tempTodos[date]) {
				tempTodos[date] = newProps.tempTodos[date]
			} else {
				tempTodos[date][time] = newProps.tempTodos[date][time]
			}
			this.setState({
				tempTodos
			});
		}
	}

	markDone(selectedDay, time) {
		let tempTodos = this.state.tempTodos;
		console.log ('tempTodos:', tempTodos)
		let day = tempTodos[selectedDay];
		console.log ('day:', day)
	}
;
	render() {
		console.log ('this.props.tempTodos:', this.props.tempTodos)
		const { selectedDay } = this.props;
		const { tempTodos } = this.state;
		console.log ('tempTodos:', tempTodos)
		console.log ('selectedDay:', selectedDay)

		// if(Object.keys(tempTodos).length) {
			return (
				<DisplayTempTodos
					markDone={this.markDone}
					selectedDay={selectedDay}
					tempTodos={tempTodos}
					/>
			)
		// }
		// else {
		// 	return (
		// 		<NoTodo
		// 			selectedDay={selectedDay}/>
		// 	)
		// }
	}
}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay,
		selectedDayTodos: state.selectedDayTodos.toJS(),
		tempTodos: state.tempTodos.toJS()
	}
}

export default connect(mapStateToProps)(TempMain);
