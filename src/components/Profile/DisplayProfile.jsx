import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import ProgressBar from './ProgressBar';
import LogoutDialog from '../LogoutDialog';
import Share from './Share';

class DisplayProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openLogoutDialog: false
		}

		this.closeLogoutDialog = this.closeLogoutDialog.bind(this);
		this.logout = this.logout.bind(this);
	}

	closeLogoutDialog() {
		this.setState({ openLogoutDialog: false });
	}

	logout() {
		this.setState({ openLogoutDialog: true });
	}

	render() {
		const { displayName, email, photoURL } = this.props.currentUser;
		const { openLogoutDialog } = this.state;
		return (
			<Card
				className="card">
				<div
					className="top-div">
					<div className="text-center profile-pic-div">
						<img
							className="profile-pic img-circle"
							src={photoURL} />

					</div>
				</div>
				<div className="bottom-div">
					<i
						className="fa fa-sign-out pull-right"
						onClick={this.logout}>
					</i>

					<div className="text-center displayName-div">
						<h1>{displayName}</h1>

					</div>

				<hr/>
					<Share />
				<hr/>

					<ProgressBar />
				</div>

				<LogoutDialog
					openLogoutDialog={openLogoutDialog}
					closeLogoutDialog={this.closeLogoutDialog}/>

			</Card>
		)
	}
}

export default DisplayProfile;
