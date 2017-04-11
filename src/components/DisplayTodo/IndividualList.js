import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import Menu from './Menu';
import * as actions from '../../actions/creators';

class IndividualList extends Component {
	constructor(props) {
		super(props);

		this.markDone = this.markDone.bind(this);
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
								<div className="todo-text">{todo}</div>
							</div>
						)}

					<Menu
						todo={todo}
						time={time}
						selectedDay={selectedDay}/>
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
