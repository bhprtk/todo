import React, { Component } from 'react';
import MenuItems from './MenuItems';
import $ from 'jquery';

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
		// $('.menu').slideUp();
		// setTimeout(() => this.setState({showMenu: true}), 500)
		this.setState({showMenu: true});
	}

	render() {
		const { showMenu } = this.state;
		const { todo, time, selectedDay, openDeleteDialog, openEditModal } = this.props;
		let menuItems;
		if(showMenu) {
			menuItems = (
				<div
					className="text-center"
					onMouseEnter={this.showMenu}
					onMouseLeave={this.hideMenu}>
					<MenuItems
						todo={todo}
						time={time}
						selectedDay={selectedDay}
						openDeleteDialog={openDeleteDialog}
						openEditModal={openEditModal}/>
				</div>
			)
		} else {
			menuItems = (
				<div></div>
			)
		}
		return (
			<div className="menu-div">
				{menuItems}
				<div
					className="hamburger"
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
