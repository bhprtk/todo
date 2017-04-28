import { connect } from 'react-redux';
import React, { Component } from 'react';

class DisplayTempTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempTodos: {}
		}
	}

	componentWillReceiveProps(newProps) {
		console.log ('newProps.tempTodos:', newProps.tempTodos)
		let tempTodos = this.state.tempTodos;
		const date = Object.keys(newProps.tempTodos)[0];
		// console.log ('date:', date)
		// console.log ('tempTodos:', tempTodos)
		if(date) {
			// console.log ('newProps.tempTodos[date]:', newProps.tempTodos[date])
			const time = Object.keys(newProps.tempTodos[date])[0];
			console.log ('time:', time)
			if(!tempTodos[date]) {
				tempTodos[date] = newProps.tempTodos[date]
			} else {
				tempTodos[date][time] = newProps.tempTodos[date][time]
			}
			this.setState({
				tempTodos
			})
			// console.log ('tempTodos:', tempTodos)

		}
	}

	render() {
		// const { tempTodos } = this.props;
		const { tempTodos } = this.state;
		console.log ('tempTodos:', tempTodos)
		return (
			<div className="col-md-6 col-sm-6 col-xs-6">
				DisplayTempTodo
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tempTodos: state.tempTodos.toJS()
	}
}

export default connect(mapStateToProps)(DisplayTempTodo);
