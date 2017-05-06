import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/creators';

class Share extends Component {
	constructor(props) {
		super(props);

		this.share = this.share.bind(this);
	}

	share() {
		const { actions, currentUser } = this.props;
		FB.ui({
		  method: 'share',
		  href: 'https://developers.facebook.com/docs/',
		}, () => {
			actions.addShareCount(currentUser.uid)
			}
		);
	}

	render() {
		return (
			<button
				className="btn btn-info"
				onClick={this.share}>
				share
			</button>

		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Share);
