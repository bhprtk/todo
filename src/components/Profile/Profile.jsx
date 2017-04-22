import { connect } from 'react-redux';
import React, { Component } from 'react';
import DisplayProfile from './DisplayProfile';
import Login from './Login';

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { currentUser } = this.props;
		if(Object.keys(currentUser).length) {
			return (
				<div>
					<DisplayProfile
						currentUser={currentUser}/>
				</div>
			)
		} else {
			return (
				<div>
					<Login />
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

export default connect(mapStateToProps)(Profile);
