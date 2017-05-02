import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../../actions/creators';

class Login extends Component {
	constructor(props) {
		super(props);

		this.facebookSignIn = this.facebookSignIn.bind(this);
		this.googleSignIn = this.googleSignIn.bind(this);
	}

	googleSignIn() {
		const { actions } = this.props;
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => actions.loginUser(result))
	}

	facebookSignIn() {
		console.log('facebook')
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => actions.loginUser(result))
	}

	render() {
		return (
			<div>
				<h3 className="text-center">Sign in to save your todos forever.</h3>
				<div className="text-center">
					<button
						className="btn btn-default"
						onClick={this.signIn}>
						Google
					</button>
					<button
						className="btn btn-default"
						onClick={this.facebookSignIn}>
						Facebook
					</button>

				</div>

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
