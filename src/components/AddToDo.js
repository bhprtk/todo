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
		e.preventDefault();
		const { actions } = this.props;
		actions.addToDo(this.state.inputValue);
	}

	render() {
		return (
			<div className="col-md-4 col-sm-4 col-xs-4">
				<h1 className="text-center">TODO LIST</h1>
				<form
					onSubmit={this.submitTodo}>
					<input
						className="form-control"
						onChange={this.inputChange}
						onSubmit={this.submitTodo}
						placeholder="Add a to-do..."
						type="text"/>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
