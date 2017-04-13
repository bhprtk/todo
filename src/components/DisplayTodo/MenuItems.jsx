import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as actions from '../../actions/creators';

class MenuItems extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		}

		this.deleteTodo = this.deleteTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.handleClose = this.handleClose.bind(this);

	}

	deleteTodo() {
		const { openDeleteDialog } = this.props;
		openDeleteDialog();
	}

	editTodo() {
		const { openEditModal } = this.props;
		openEditModal();
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {
		return (
			<div className="menu-items">
					<span
						className="delete-button"
						onClick={this.deleteTodo}>
						<i className="glyphicon glyphicon-trash"></i>
					</span>
					<span
						className="edit-button"
						onClick={this.editTodo}>
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
