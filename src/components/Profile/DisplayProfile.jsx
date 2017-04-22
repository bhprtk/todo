import React, { Component } from 'react';

class DisplayProfile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { displayName, email, photoURL } = this.props.currentUser;
		return (
			<div className="col-md-6 col-sm-6 col-xs-6">
				<img
					className="profile-pic img-circle" 
					src={photoURL} />
			</div>
		)
	}
}

export default DisplayProfile;
