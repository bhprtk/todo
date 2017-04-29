import { connect } from 'react-redux';
import React, { Component } from 'react';
import DisplayTempTodos from './DisplayTempTodos';

class TempMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempTodos: {}
		}
	}

	componentWillReceiveProps(newProps) {
		let tempTodos = this.state.tempTodos;
		const date = Object.keys(newProps.tempTodos)[0];
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

	render() {
		const { selectedDay } = this.props;
		const { tempTodos } = this.state;

		if(Object.keys(tempTodos).length) {
			console.log('here')
			return (
				<DisplayTempTodos
					tempTodos={tempTodos}
					selectedDay={selectedDay}/>
			)
		}
		else {
			return (
				<div></div>

			)
		}
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
