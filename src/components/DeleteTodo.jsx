import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import * as actions from '../actions/creators';


const styles = {
	deleteDialog: {
		width: 400
	}
}

class DeleteTodo extends Component {
	constructor(props) {
		super(props);

		this.deleteTodo = this.deleteTodo.bind(this);

	}

	deleteTodo() {
		const { time, selectedDay, actions, closeDeleteDialog } = this.props;
		const data = { time, selectedDay };
		actions.deleteTodo(data);
		closeDeleteDialog();
	}

	render() {
		const { openDeleteDialog, closeDeleteDialog } = this.props;

		const actionButtons = [
			<button
				className="btn btn-default"
				onClick={closeDeleteDialog}
				style={{
					color:'#4C5769'
				}}>
				Cancel
			</button>,
			<button
				className="btn btn-default"
				onClick={this.deleteTodo}
				style={{
					background: '#E57373',
					color: '#fff',
					marginLeft: 5
				}}>
				Delete
			</button>
		]
		return (
			<Dialog
				actions={actionButtons}
				contentStyle={styles.deleteDialog}
				modal={false}
				open={openDeleteDialog}
				onRequestClose={closeDeleteDialog}>
				Are you sure you want to delete this task?
			</Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
