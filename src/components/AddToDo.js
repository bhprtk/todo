import React, { Component } from 'react';
import * as actions from '../actions/creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddToDo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: ''
		}

		this.inputChange = this.inputChange.bind(this);
		this.submitTodo = this.submitTodo.bind(this);
	}

	inputChange(e) {
		const { value } = e.target;
		this.setState({ inputValue: value });
	}

	submitTodo(e) {
		const { actions } = this.props;
		e.preventDefault();
		console.log ('this.state.inputValue:', this.state.inputValue)
		actions.addToDo(this.state.inputValue);
	}

	render() {
		return (
			<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
				<h1 className="text-center">TODO LIST</h1>
				<form
					onSubmit={this.submitTodo}>
					<input
						className="form-control"
						onChange={this.inputChange}
						onSubmit={this.submitTodo}
						type="text"/>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
