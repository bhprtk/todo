import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as actions from '../actions/creators';
import $ from 'jquery';

class EditModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: this.props.todo
		}

		this.changeInputValue = this.changeInputValue.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.star = this.star.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ inputValue: nextProps.todo });
	}

	changeInputValue(e) {
		const { value } = e.target;
		this.setState({ inputValue: value });
	}

	editTodo(e) {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid } = this.props.currentUser;
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
			time,
			uid
		}
		actions.editTodo(data);
		hideModal();
		truthifyResetDisplayTodo();
	}

	star() {
		$('.star').toggleClass('glyphicon-star-empty glyphicon-star')
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
	      <Modal.Header
					style={{height: 50}}>
	        <Modal.Title></Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
					<form
						onSubmit={this.editTodo}>
						<div className="input-group">
							<input
								className="form-control"
								onChange={this.changeInputValue}
								value={inputValue}
								onSubmit={this.submitTodo}
								type="text"
								style={{
									height: 50,
									fontSize: 20
								}}
								autoFocus
								/>
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
							background: '#83c6b0',
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
		currentUser: state.currentUser.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
