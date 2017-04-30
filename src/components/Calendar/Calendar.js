import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';
import CalendarDay from './CalendarDay';
import $ from 'jquery';
import * as actions from '../../actions/creators';


class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			days: [moment().format()],
			startIndex: 0
		}

		this.onClickLeft = this.onClickLeft.bind(this);
		this.onClickRight = this.onClickRight.bind(this);
		this.resetCalendar = this.resetCalendar.bind(this);
		// this.onHover = this.onHover.bind(this);

	}

	componentWillMount() {
		this.resetCalendar();
	}

	resetCalendar() {
		const { actions, currentUser } = this.props;
		let days = [];
		for(let i = -3; i <= 3; i++) {
			days.push(moment().add(i, 'day').format())
		}
		this.setState({
			days
		})
		// const data = {
		// 	selectedDay: moment().format(),
		// 	// uid: currentUser.uid
		// }

		actions.selectDay({
			selectedDay: moment().format(),
			currentUser
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
		const { selectedDay } = this.props;
		const today = moment().format();
		let todayButton;
		if(moment(selectedDay).isBefore(today, 'day')) {
			todayButton = (
				<button
					className="today-button pull-right"
					onClick={this.resetCalendar}>
					<strong>
						Today
					</strong>
					<i className="fa fa-angle-double-right"></i>
				</button>
			)
		} else if(moment(selectedDay).isAfter(today, 'day')) {
			todayButton = (
				<button
					className="today-button pull-right"
					onClick={this.resetCalendar}>
					<i className="fa fa-angle-double-left"></i>
					<strong>
						Today
					</strong>
				</button>
			)
		} else if(moment(selectedDay).isSame(today, 'day')){
			todayButton = (
				<button
					className="today-button pull-right"
					onClick={this.resetCalendar}>
					<strong>
						Today
					</strong>
				</button>
			)
		}

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
							<CalendarDay
								day={day}
								key={index} />
						))}

					</div>

				</div>

				{todayButton}
			</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser.toJS(),
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
