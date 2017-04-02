import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick';
import { Carousel } from 'react-bootstrap';
import { GridList, GridTile } from 'material-ui/GridList';
import CalendarDay from './CalendarDay';
import $ from 'jquery';


class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: [moment().format()]
		}

		this.onClickLeft = this.onClickLeft.bind(this);
		this.onClickRight = this.onClickRight.bind(this);

	}

	componentWillMount() {
		let days = [];
		for(let i = -3; i <= 3; i++) {
			days.push(moment().add(i, 'day').format())
		}
		this.setState({
			days
		})
	}

	onClickLeft() {
		const $item = $('.item');
		// let days = this.state.days;
		// let newDay = moment(days[0]).subtract(1, 'day').format();
		// days.unshift(newDay)
		// console.log ('days:', days)
		// this.setState({days})

		$item.animate({ left: '+=140px' })
	}

	onClickRight() {
		const $item = $('.item');
		$item.animate({ left: '-=140px' })
	}


	render() {
		const { days } = this.state;

		return (
			<div className="calendar-container col-md-8">
				<div
					className="left"
					onClick={this.onClickLeft}>
					<span className="glyphicon glyphicon-menu-left"></span>
				</div>
				<div
					className="right"
					onClick={this.onClickRight}>
					<span className="glyphicon glyphicon-menu-right"></span>
				</div>

				<div className="list-container">
					<div className="list">
						{days.map((day, index) => (
							<div className="item" key={index}>
								{moment(day).format('dddd MMMM D')}
							</div>
						))}

					</div>

				</div>

			</div>

		)
	}
}



export default Calendar;
