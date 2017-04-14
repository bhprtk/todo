import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import Menu from './Menu';
import * as actions from '../../actions/creators';
import DeleteTodo from '../DeleteTodo';
import EditModal from '../EditModal';
import TodoText from './TodoText';

class IndividualList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openDeleteDialog: false,
			showModal: false
		}

		this.markDone = this.markDone.bind(this);
		this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
		this.openDeleteDialog = this.openDeleteDialog.bind(this);
		this.openEditModal = this.openEditModal.bind(this);
		this.hideEditModal = this.hideEditModal.bind(this);
	}

	openEditModal() {
		this.setState({ showModal: true });
	}

	hideEditModal() {
		this.setState({ showModal: false });
	}

	openDeleteDialog() {
		this.setState({ openDeleteDialog: true });
	}

	closeDeleteDialog() {
		this.setState({ openDeleteDialog: false });
	}

	markDone() {
		const { time, actions } = this.props;
		const { done } = this.props.todo;
		const { selectedDay } = this.props.selectedDay;
		let value = !done;
		const data = {time, selectedDay, value}
		actions.markDone(data)
	}

	render() {
		const { time } = this.props;
		const { selectedDay } = this.props.selectedDay;
		const { todo, done } = this.props.todo;
		const { openDeleteDialog, showModal } = this.state;
		return (
			<div
				className="todo-item list-group-item">
				<blockquote className="blockquote row">
						{done ? (
							<div className="pull-left not-menu">
								<div
									className="glyphicon glyphicon-check"
									onClick={this.markDone}>
								</div>
								<div className="todo-text strike">{todo}</div>
							</div>
						) : (
							<div className="pull-left not-menu">
								<div
									className="glyphicon glyphicon-unchecked"
									onClick={this.markDone}>
								</div>
								<div className="todo-text">
									<TodoText todo={todo} />
								</div>
							</div>
						)}

					<Menu
						todo={todo}
						time={time}
						selectedDay={selectedDay}
						openDeleteDialog={this.openDeleteDialog}
						openEditModal={this.openEditModal}/>

					<DeleteTodo
						openDeleteDialog={openDeleteDialog}
						closeDeleteDialog={this.closeDeleteDialog}
						time={time}
						selectedDay={selectedDay}  />

					<EditModal
						showModal={showModal}
						hideModal={this.hideEditModal}
						selectedDay={selectedDay}
						todo={todo}
						time={time}/>

				</blockquote>


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

export default connect(mapStateToProps, mapDispatchToProps)(IndividualList);
