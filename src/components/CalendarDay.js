import React, { Component } from 'react';

class CalendarDay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { day } = this.props;
		console.log ('day:', day)
		return (
			<div
				className="text-center item"
				style={styles.listItem}>
				{day}
			</div>
		)
	}

}

export default CalendarDay;
