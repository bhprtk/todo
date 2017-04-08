import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pull-right">
				<span className="glyphicon glyphicon-trash"> </span>
				 |
				<span className="glyphicon glyphicon-edit"> </span>
			</div>
		)
	}
}

export default Menu;
