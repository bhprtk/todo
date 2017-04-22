import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../../actions/creators';

class Login extends Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
		this.signIn = this.signIn.bind(this);
	}

	logout() {
		firebase
			.auth()
			.signOut()
			.then(() => console.log ('logout successful'))
			.catch(error => console.log ('error:', error))
	}

	signIn() {
		const { actions } = this.props;
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => actions.loginUser(result))
			.catch(error => console.log ('error:', error));

	}

	render() {
		return (
			<div
				className="col-md-6 col-sm-6 col-xs-6"
				style={{
					paddingTop: 50,
					paddingLeft: 50
				}}>
				<button
					onClick={this.signIn}
					style={{
						background: '#fff',
						borderStyle: 'solid',
						borderWidth: 2,
						borderColor: '#c36349',
						color: '#c36349',
						fontWeight: 'bold',
						width: 100,
						height: 40
					}}>
					Google
				</button>
				<button
					onClick={this.logout}
					style={{
						background: '#fff',
						borderStyle: 'solid',
						borderWidth: 2,
						borderColor: '#c36349',
						color: '#c36349',
						fontWeight: 'bold',
						width: 100,
						height: 40
					}}>
					Logout
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
