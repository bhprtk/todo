import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from '../../actions/creators';

class Login extends Component {
	constructor(props) {
		super(props);

		this.signIn = this.signIn.bind(this);
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
