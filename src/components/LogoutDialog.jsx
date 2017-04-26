import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import React, { Component } from 'react';
import * as actions from '../actions/creators';

class LogoutDialog extends Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout() {
		const { actions, closeLogoutDialog } = this.props;
		actions.logout();
		closeLogoutDialog();
	}

	render() {
		const { openLogoutDialog, closeLogoutDialog } = this.props;

		const actionButtons = [
			<button
				className="btn btn-default"
				onClick={closeLogoutDialog}
				style={{
					color:'#4C5769'
				}}>
				Cancel
			</button>,
			<button
				className="btn btn-default"
				onClick={this.logout}
				style={{
					background: '#E57373',
					color: '#fff',
					marginLeft: 5
				}}>
				Logout
			</button>
		]

		return (
			<Dialog
				actions={actionButtons}
				contentStyle={{ width: 400 }}
				modal={false}
				open={openLogoutDialog}
				onRequestClose={closeLogoutDialog}>
				Are you sure you want to logout?
			</Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutDialog);
