import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/creators';

class MenuItems extends Component {
	constructor(props) {
		super(props);

		this.deleteTodo = this.deleteTodo.bind(this);

	}

	deleteTodo() {
		const { todo, time, selectedDay, actions } = this.props;
		const data = {todo, time, selectedDay};
		actions.deleteTodo(data);
	}

	render() {
		return (
			<div className="menu-items">
					<span
						className="delete-button"
						onClick={this.deleteTodo}>
						<i className="glyphicon glyphicon-trash"></i>
					</span>
					<span className="edit-button">
						<i className="glyphicon glyphicon-edit"></i>
					</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
