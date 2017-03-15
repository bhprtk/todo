import React, { Component } from 'react';

class AddToDo extends Component {
	constructor(props) {
		super(props);

		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(e) {
		const { value } = e.target;
		console.log ('value:', value)
	}

	render() {
		return (
			<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
				<h1 className="text-center">TODO LIST</h1>
				<input
					className="form-control"
					onChange={this.inputChange}
					type="text"/>
			</div>
		)
	}
}

export default AddToDo;
