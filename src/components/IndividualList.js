import React, { Component } from 'react';
import moment from 'moment';

class IndividualList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { date, list } = this.props;
		// console.log ('list:', list)
		let displayDate = moment(date).format('LL');
		return (
			<a
				className="list-group-item"
				role="button">
				<blockquote>
					{displayDate}

				</blockquote>
			</a>
		)
	}
}

export default IndividualList;
