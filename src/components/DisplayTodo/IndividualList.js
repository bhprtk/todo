import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import Menu from './Menu';

class IndividualList extends Component {
	constructor(props) {
		super(props);

		this.check = this.check.bind(this);
	}

	check(e) {
		$(e.target).toggleClass('glyphicon-unchecked glyphicon-check');
		const $target = $(e.target).siblings('.todo-text');
		console.log ('$target:', $target)
		$target.toggleClass("strike");
	}

	render() {
		const { time } = this.props;
		const { todo, done } = this.props.todo;
		// const timeAdded = moment(time).format('h:mm a');
		// console.log ('todo:', todo)
		// console.log ('timeAdded:', timeAdded)
		return (
			<div
				className="list-group-item todo-item">
				<blockquote className="blockquote">

						<div
							className="glyphicon glyphicon-unchecked"
							onClick={this.check}></div>
						<div className="todo-text">{todo}</div>					<Menu />
				</blockquote>


			</div>
		)
	}
}

export default IndividualList;
