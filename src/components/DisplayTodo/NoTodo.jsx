import React, { Component } from 'react';

class NoTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className="col-md-6 col-sm-6 col-xs-6"
				style={{
					color: '#4C5769',
					marginTop: 40
				}}>
					<i className="fa fa-hand-o-up fa-5x animated infinite bounce"></i>
					<h1>Add a task for today.</h1>
			</div>
		)
	}

}

export default NoTodo;
