import React, { Component } from 'react';
import * as actions from '../actions/creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import $ from 'jquery';

class AddToDo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: ''
		}

		this.inputChange = this.inputChange.bind(this);
		this.submitTodo = this.submitTodo.bind(this);
		this.star = this.star.bind(this);
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

	star() {
		$('.star').toggleClass('glyphicon-star-empty glyphicon-star')
		// $('.star').toggleClass('not-starred starred')
	}

	render() {
		return (
			<div
				className="col-md-4 col-sm-4 col-xs-4 add-to-do">
				<form
					onSubmit={this.submitTodo}>
					<div className="input-group">
						<input
							className="form-control"
							onChange={this.inputChange}
							onSubmit={this.submitTodo}
							placeholder="Add a to-do..."
							type="text"/>
						<div
							className="input-group-addon star-div"
							style={{
								background: '#fff',
							}}>
							<span
								className="glyphicon glyphicon-star-empty star"
								onClick={this.star}>
							</span>

						</div>

					</div>
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
