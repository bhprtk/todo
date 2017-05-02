import React, { Component } from 'react';

class Share extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className="fb-share-button text-center"
				data-href="https://github.com/bhprtk"
				data-layout="button"
				data-size="large"
				data-mobile-iframe="true">
				<a
					className="fb-xfbml-parse-ignore"
					target="_blank"
					href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2F&amp;src=sdkpreparse">
					Share
				</a>

			</div>

		)
	}
}

export default Share;
