import React, { Component } from 'react';

class Share extends Component {
	constructor(props) {
		super(props);

		this.share = this.share.bind(this);
	}

	share() {
		console.log('share')
		FB.ui({
		  method: 'share',
		  href: 'https://developers.facebook.com/docs/',
		}, function(response){
			console.log ('response:', response)
		});
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

export default Share;
