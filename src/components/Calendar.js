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
			days: [moment().format()],
			startIndex: 0
		}

		this.onClickLeft = this.onClickLeft.bind(this);
		this.onClickRight = this.onClickRight.bind(this);
		// this.onHover = this.onHover.bind(this);

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
		const $list = $('.list');
		let days = this.state.days;
		// const { startIndex } = this.state;
		let newDay = moment(days[0]).subtract(1, 'day').format();
		//
		//
		// console.log ('$item:', $item)
		days.unshift(newDay)
		days.pop()
		// console.log ('days:', days)
		this.setState({days})
		// this.setState({startIndex: startIndex + 1})
		$item.animate({ 'left': '+=140px' }, 'fast')
		$list.css({'margin-left': '-=140px'})

	}

	onClickRight() {
		const $item = $('.item');
		const $list = $('.list');
		let days = this.state.days;
		const lastDay = days[days.length - 1];
		let newDay = moment(lastDay).add(1, 'day').format();
		days.push(newDay)
		days.shift()
		this.setState({days});
		$item.animate({ left: '-=140px' }, 'fast')
		$list.css({'margin-left': '+=140px'})
	}


	render() {
		const { days, startIndex } = this.state;

		return (
			<div className="calendar-container col-md-8">
				<div
					className="left animated pulse"
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

						{days.map((day, index) => <CalendarDay day={day} key={index} />)}

					</div>

				</div>

			</div>

		)
	}
}



export default Calendar;
