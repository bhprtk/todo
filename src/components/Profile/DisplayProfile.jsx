import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import ProgressBar from './ProgressBar';

class DisplayProfile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { displayName, email, photoURL } = this.props.currentUser;
		return (
			<Card
				className="card"
				style={{
					position: 'fixed',
					width: 'inherit'
				}}>
				<div
					className="top-div">
					<div className="text-center profile-pic-div">
						<img
							className="profile-pic img-circle"
							src={photoURL} />

					</div>
				</div>
				<div className="bottom-div">
					<div className="text-center displayName-div">
						<h1>{displayName}</h1>

					</div>
					<hr/>
					<ProgressBar />
				</div>

			</Card>
		)
	}
}

export default DisplayProfile;
