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
			<div className="text-center">
				<p>
					<strong>
						Share to unlock the progress bar
					</strong>
				</p>
				<br/>
				<button
					className="btn btn-social btn-facebook"
					onClick={this.share}>
					<span className="fa fa-facebook"></span>
					Share
				</button>
			</div>

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
