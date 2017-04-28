import React, { Component } from 'react';
import moment from 'moment';
import IndividualList from '../DisplayTodo/IndividualList';

class DisplayTempTodos extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { tempTodos } = this.props;
		let selectedDay = this.props.selectedDay;
		const day = moment(selectedDay).format('MM-DD-YYYY');

		console.log ('tempTodos:', tempTodos)
		if(tempTodos) {
			return (
				<div>
					<div
						className="list-group todo-group">
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
				<div></div>
			)
		}
	}
}

// <NoTodo
// 	selectedDay={selectedDay}/>
export default DisplayTempTodos;
