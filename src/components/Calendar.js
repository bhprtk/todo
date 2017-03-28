import React, { Component } from 'react';
import moment from 'moment';
import Slider from 'react-slick';


class Calendar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var settings = {
		 dots: true,
		 infinite: true,
		 speed: 500,
		 slidesToShow: 1,
		 slidesToScroll: 1
	 };
		const today = moment().format('dddd');
		console.log ('today:', today)
		return (
				<Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>

		)
	}

}

export default Calendar;
