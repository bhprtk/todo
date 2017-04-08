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
		$(e.target).toggleClass('glyphicon-unchecked glyphicon-check')
	}

	render() {
		const { todo, time } = this.props;
		// const timeAdded = moment(time).format('h:mm a');
		console.log ('todo:', todo)
		// console.log ('timeAdded:', timeAdded)
		return (
			<div
				className="list-group-item todo-item">
				<blockquote>
					<span
						className="glyphicon glyphicon-unchecked"
						onClick={this.check}></span>
					<span className="todo-text">{todo}</span>
					<Menu />
				</blockquote>


			</div>
		)
	}
}

export default IndividualList;
