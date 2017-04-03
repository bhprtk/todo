import React, { Component } from 'react';
import * as actions from '../actions/creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import $ from 'jquery';

const styles = {
	selectedDay: {
		background: '#E57373',
		color: '#fff'
	}
}

class CalendarDay extends Component {
	constructor(props) {
		super(props);

		this.selectDay = this.selectDay.bind(this);
	}

	selectDay() {
		const { day, actions } = this.props;
		actions.selectDay(day);
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	const { day } = nextProps;
	// 	const { selectedDay } = nextProps.selectedDay;
	// 	console.log('selectedDay', moment(selectedDay).format('dddd MMMM DD'))
	// 	console.log('day', moment(day).format('dddd MMMM DD'))
	// 	const $item = $('.item');
	// 	console.log ('$item:', $item)
	// 	if(moment(day).format('dddd MMMM DD') === moment(selectedDay).format('dddd MMMM DD')) {
	// 		$('.item').css({background: 'red'})
	// 	}
	// }

	render() {
		const { day } = this.props;
		const { selectedDay } = this.props.selectedDay;
		if (moment(day).format('dddd MMMM DD') === moment(selectedDay).format('dddd MMMM DD')){
			return (
				<div
					className="item"
					onClick={this.selectDay}
					style={styles.selectedDay}>
					<strong>
						{moment(day).format('dddd')}

					</strong>
					<p >
						{moment(day).format('MMMM DD')}

					</p>
				</div>
			)
		} else {
			return (
				<div
					className="item"
					onClick={this.selectDay}>
					<strong>
						{moment(day).format('dddd')}

					</strong>
					<p >
						{moment(day).format('MMMM DD')}

					</p>
				</div>
			)
		}

	}

}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
