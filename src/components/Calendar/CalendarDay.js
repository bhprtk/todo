import React, { Component } from 'react';
import * as actions from '../../actions/creators';
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

	componentWillMount() {
		const { actions } = this.props;
		actions.selectDay(moment().format());
	}

	selectDay() {
		const { day, actions } = this.props;
		actions.selectDay(day);
	}

	render() {
		const { day } = this.props;
		const { selectedDay } = this.props.selectedDay;
		console.log ('selectedDay:', selectedDay)
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
