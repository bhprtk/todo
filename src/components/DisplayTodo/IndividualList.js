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
			showModal: false,
			height: 75,
			resetDisplayTodo: false
		}

		this.markDone = this.markDone.bind(this);
		this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
		this.openDeleteDialog = this.openDeleteDialog.bind(this);
		this.openEditModal = this.openEditModal.bind(this);
		this.hideEditModal = this.hideEditModal.bind(this);
		this.increaseHeight = this.increaseHeight.bind(this);
		this.resetHeight = this.resetHeight.bind(this);
		this.falsifyResetDisplayTodo = this.falsifyResetDisplayTodo.bind(this);
		this.truthifyResetDisplayTodo = this.truthifyResetDisplayTodo.bind(this);
	}

	falsifyResetDisplayTodo() {
		this.setState({
			resetDisplayTodo: false,
			height: 75
		})
	}

	truthifyResetDisplayTodo() {
		this.setState({resetDisplayTodo: true});
	}

	increaseHeight(length) {
		let height = this.state.height;
		height += length * 30;
		this.setState({height})
	}

	resetHeight() {
		this.setState({height: 75});
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
		const { uid } = this.props.currentUser;
		let value = !done;
		const data = {time, selectedDay, value, uid}
		actions.markDone(data)
	}

	render() {
		const { time } = this.props;
		const { selectedDay } = this.props;
		const { todo, done } = this.props.todo;
		const { openDeleteDialog, showModal, height } = this.state;
		return (
			<div
				className="todo-item list-group-item">
				<blockquote className="blockquote row">
					<div>
						{done ? (
							<div className="not-menu col-xs-11 col-sm-11">
								<span
									className="glyphicon glyphicon-check"
									onClick={this.markDone}>
								</span>
								<div className="todo-text strike">{todo}</div>
							</div>
						) : (
							<div className="not-menu col-xs-11 col-sm-11">
								<span
									className="glyphicon glyphicon-unchecked"
									onClick={this.markDone}>
								</span>
								<div className="todo-text">
									{todo}
								</div>
							</div>
						)}

					</div>

					<div className="col-xs-1 col-sm-1">
						<Menu
							todo={todo}
							time={time}
							selectedDay={selectedDay}
							openDeleteDialog={this.openDeleteDialog}
							openEditModal={this.openEditModal}/>
					</div>


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
						time={time}
						truthifyResetDisplayTodo={this.truthifyResetDisplayTodo}/>

				</blockquote>


			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualList);


// <TodoText
// 	increaseHeight={this.increaseHeight}
// 	resetHeight={this.resetHeight}
// 	resetDisplayTodo={this.state.resetDisplayTodo}
// 	falsifyResetDisplayTodo={this.falsifyResetDisplayTodo}
// 	todo={todo} />
