import React, { Component } from 'react';

const styles = {
	listItem: {
		background: 'gray',
		width: '250px',
		position: 'relative',
		margin: 5,
		float: 'left'
	}
}

class CalendarDay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { day } = this.props;
		return (
			<span
				className="text-center item"
				style={styles.listItem}>
				{day}
			</span>
		)
	}

}

export default CalendarDay;
