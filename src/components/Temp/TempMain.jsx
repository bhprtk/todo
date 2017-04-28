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
		console.log ('tempTodos:', tempTodos)

		if(Object.keys(tempTodos).length) {
			console.log('here')
			return (
				<div className="col-md-6 col-sm-6 col-xs-6">
					<DisplayTempTodos
						tempTodos={tempTodos}
						selectedDay={selectedDay}/>
				</div>
			)
		}
		else {
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
		selectedDayTodos: state.selectedDayTodos.toJS(),
		tempTodos: state.tempTodos.toJS()
	}
}

export default connect(mapStateToProps)(TempMain);
