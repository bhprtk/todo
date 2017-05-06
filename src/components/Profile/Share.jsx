import React, { Component } from 'react';

class Share extends Component {
	constructor(props) {
		super(props);

		this.share = this.share.bind(this);
	}

	share() {
		console.log('share')
	}

	render() {
		return (
			<button
				className="btn btn-info"
				onClick={this.share}>
				share
			</button>

		)
	}
}

export default Share;
