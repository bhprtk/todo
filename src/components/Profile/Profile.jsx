import { connect } from 'react-redux';
import React, { Component } from 'react';
import DisplayProfile from './DisplayProfile';
import Login from './Login';

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { currentUser, shareCount } = this.props;
		if(currentUser.displayName) {
			return (
				<div
					className="col-md-6 col-sm-6 col-xs-6">
					<DisplayProfile
						currentUser={currentUser}
						shareCount={shareCount} />
				</div>
			)
		} else {
			return (
				<div className="col-md-6 col-sm-6 col-xs-6">
					<Login />
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS(),
		shareCount: state.shareCount
	}
}

export default connect(mapStateToProps)(Profile);
