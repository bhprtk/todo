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
				<div
					className="panel panel-info">
					<div className="panel-body">
						<p>
							<strong className="text-center info">
								Your data is being saved on our temporary storage
								and will be erased when you close your browser tab.
							</strong>
						</p>

					</div>

				</div>


				<div className="text-center panel panel-default">
					<div className="panel-body">
						<p>
							<strong className="text-center login">
								Feel free to sign in to use our full storage services
								for no cost!!!
							</strong>

						</p>
						<hr/>
						<button
							className="btn btn-social btn-google"
							onClick={this.googleSignIn}>
							<span className="fa fa-google"></span>
							Google
						</button>
						<button
							className="btn btn-social btn-facebook"
							onClick={this.facebookSignIn}>
							<span className="fa fa-facebook"></span>
							Facebook
						</button>

					</div>

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
