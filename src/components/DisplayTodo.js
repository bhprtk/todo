import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualList from './IndividualList';

class DisplayTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { todos } = this.props;
		let list = [];
		for(let key in todos) {
			list.push(key)
		}
		return (
			<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
				<div className="list-group">
					{list.map((date, index) =>
						<IndividualList
							key={index}
							date={date}
							list={todos[date]} />
					)}
				</div>
			</div>

		)
	}

}

function mapStateToProps(state) {
	return {
		todos: state.todos.toJS()
	}
}

export default connect(mapStateToProps)(DisplayTodo);
