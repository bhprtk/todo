import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import Menu from './Menu';
import * as actions from '../../actions/creators';

class IndividualList extends Component {
	constructor(props) {
		super(props);

		this.check = this.check.bind(this);
		this.markDone = this.markDone.bind(this);
	}

	check(e) {
		$(e.target).toggleClass('glyphicon-unchecked glyphicon-check');
		const $target = $(e.target).siblings('.todo-text');
		console.log ('$target:', $target)
		$target.toggleClass("strike");
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
		const { todo, done } = this.props.todo;
		// const timeAdded = moment(time).format('h:mm a');
		// console.log ('todo:', todo)
		// console.log ('timeAdded:', timeAdded)
		return (
			<div
				className="todo-item list-group-item">
				<blockquote className="blockquote row">
					<div className="pull-left not-menu">
						<div
							className="glyphicon glyphicon-unchecked"
							onClick={this.markDone}></div>
						<div className="todo-text">{todo}</div>

					</div>
					<Menu />
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
