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
		// const { uid } = this.props.currentUser;
		const selectedDay = moment().format();
		// let data = { selectedDay, uid }

		// actions.selectDay(data);
	}

	selectDay() {
		const { day, actions } = this.props;
		// const { uid } = this.props.currentUser;
		// console.log ('uid:', uid)
		// let data = { selectedDay: day, uid }
		// console.log ('currentUser:', currentUser)
		actions.selectDay(day);
	}

	render() {
		const { day, currentUser } = this.props;
		const { selectedDay } = this.props;
		// console.log ('currentUser:', currentUser)
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
					<p>
						{moment(day).format('MMMM DD')}

					</p>
				</div>
			)
		}

	}

}

function mapStateToProps(state) {
	return {
		selectedDay: state.selectedDay.toJS().selectedDay
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
