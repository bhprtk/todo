import React, { Component } from 'react';
import MenuItems from './MenuItems';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMenu: false
		}

		this.hideMenu = this.hideMenu.bind(this);
		this.showMenu = this.showMenu.bind(this);
	}

	hideMenu() {
		this.setState({showMenu: false});
	}

	showMenu() {
		this.setState({showMenu: true});
	}

	render() {
		const { showMenu } = this.state;
		let menuItems;
		if(showMenu) {
			menuItems = (
				<div
					className="pull-right menu animated fadeInUp text-center"
					onMouseEnter={this.showMenu}
					onMouseLeave={this.hideMenu}>
					<MenuItems />
				</div>
			)
		} else {
			menuItems = (
				<div></div>
			)
		}
		return (
			<div>
				{menuItems}
				<div
					className="pull-right menu-button"
					onMouseEnter={this.showMenu}
					onMouseLeave={this.hideMenu}>
					<span
						className="glyphicon glyphicon-menu-hamburger">
					</span>
				</div>
			</div>
		)
	}
}

export default Menu;
