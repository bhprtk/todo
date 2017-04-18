import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as actions from '../actions/creators';

class EditModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: this.props.todo
		}

		this.changeInputValue = this.changeInputValue.bind(this);
		this.editTodo = this.editTodo.bind(this);

	}

	componentWillReceiveProps(nextProps) {
		this.setState({ inputValue: nextProps.todo });
	}

	changeInputValue(e) {
		const { value } = e.target;
		this.setState({ inputValue: value });
	}

	editTodo() {
		const { inputValue } = this.state;
		const {
			selectedDay,
			actions,
			time,
			hideModal,
			truthifyResetDisplayTodo
		 } = this.props;
		const data = {
			todo: inputValue,
			selectedDay,
			time
		}
		actions.editTodo(data);
		hideModal();
		truthifyResetDisplayTodo();
	}

	render() {
		const { inputValue } = this.state;
		const {
			showModal,
			hideModal,
			selectedDay,
			todo,
			time
		} = this.props;
		return (
			<Modal show={showModal} onHide={hideModal}>
	      <Modal.Header>
	        <Modal.Title></Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        <input
						type="text"
						className="form-control"
						value={inputValue}
						onChange={this.changeInputValue}
						autoFocus/>
	      </Modal.Body>

	      <Modal.Footer>
	        <button
						className="btn btn-default"
						onClick={hideModal}
						style={{
							color: '#4C5769'
						}}>
						Cancel
	        </button>
					<button
						className="btn btn-default"
						style={{
							background: '#66BB6A',
							color: '#fff'
						}}
						onClick={this.editTodo}>
						Submit
					</button>
	      </Modal.Footer>

    	</Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
