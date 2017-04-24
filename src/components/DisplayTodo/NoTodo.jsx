import React, { Component } from 'react';
import moment from 'moment';

class NoTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { selectedDay } = this.props;
		console.log ('selectedDay:', selectedDay)
		let text;
		let day = moment(selectedDay).format('dddd');
		console.log ('day:', day)
		if(day === moment().format('dddd')) {
			text = 'Add a task for today.'
		} else {
			text = `Add a task for ${day}.`
		}
		return (
			<div
				className="col-md-6 col-sm-6 col-xs-6"
				style={{
					color: '#4C5769',
					marginTop: 40
				}}>
					<i className="fa fa-hand-o-up fa-5x animated infinite bounce"></i>
					<h1>{text}</h1>
			</div>
		)
	}

}

export default NoTodo;
