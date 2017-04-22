import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class DisplayProfile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { displayName, email, photoURL } = this.props.currentUser;
		return (
			<div className="col-md-6 col-sm-6 col-xs-6">
				<div>
					<img
						className="profile-pic img-circle"
						src={photoURL} />
				</div>
				<div className="text-center">
					<strong>{displayName}</strong>
				</div>
				<ProgressBar />
			</div>
		)
	}
}

export default DisplayProfile;
