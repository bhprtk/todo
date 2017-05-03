import React, { Component } from 'react';

class Share extends Component {
	constructor(props) {
		super(props);

		this.share = this.share.bind(this);
	}

	share() {
		FB.ui(
   {
     method: 'share',
    //  name: 'Facebook Dialogs',
     href: 'https://github.com/bhprtk',
    //  picture: 'http://fbrell.com/f8.jpg',
    //  caption: 'Reference Documentation',
    //  description: 'Dialogs provide a simple, consistent interface for applications to interface with users.',
    //  message: 'Facebook Dialogs are easy!'
   },
   function(response) {
     if (response && response.post_id) {
       alert('Post was published.');
     } else {
       alert('Post was not published.');
     }
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

export default Share;
