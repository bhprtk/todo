import React, { Component } from 'react';

class MenuItems extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="menu-items">
					<span className="delete-button">
						<i className="glyphicon glyphicon-trash"></i>
					</span>
					<span className="edit-button">
						<i className="glyphicon glyphicon-edit"></i>
					</span>
			</div>
		)
	}
}

export default MenuItems;
