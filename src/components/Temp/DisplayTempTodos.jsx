import React, { Component } from 'react';
import moment from 'moment';
import IndividualList from '../DisplayTodo/IndividualList';
import NoTodo from '../DisplayTodo/NoTodo';

class DisplayTempTodos extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { tempTodos } = this.props;
		let selectedDay = this.props.selectedDay;
		console.log ('selectedDay:', selectedDay)
		const day = moment(selectedDay).format('MM-DD-YYYY');

		console.log ('tempTodos:', tempTodos)
		if(tempTodos[day]) {
			return (
				<div>
					<div
						className="col-md-6 col-sm-6 col-xs-6 list-group todo-group">
						{Object
							.keys(tempTodos[day])
							.sort()
							.map((time, index) =>
							<IndividualList
								key={index}
								selectedDay={selectedDay}
								time={time}
								todo={tempTodos[day][time]} />
						)}

					</div>

				</div>

			)
		} else {
			return (
				<NoTodo
					selectedDay={selectedDay}/>
			)
		}
	}
}

export default DisplayTempTodos;
