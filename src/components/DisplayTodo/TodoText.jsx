import React, { Component } from 'react';

class TodoText extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: '',
			displayTodo: []
		}

		this.showLess = this.showLess.bind(this);
		this.showMore = this.showMore.bind(this);
	}

	componentWillUpdate(nextProps) {
		const { falsifyResetDisplayTodo } = this.props;
		// console.log ('nextProps.resetDisplayTodo:', nextProps.resetDisplayTodo)
		if(nextProps.resetDisplayTodo) {
			this.setState({displayTodo: []})
			falsifyResetDisplayTodo();
		}
	}

	showLess() {
		const { resetHeight } = this.props;
		this.setState({displayTodo: []})
		resetHeight();

	}

	showMore() {
		let todo = this.props.todo;
		const { increaseHeight } = this.props;
		let displayTodo = [], index = 0;
		const limit = 48;
		while(todo.length) {
			if(todo.length > limit) {
				let todoText = todo.substring(0, limit);
				todo = todo.slice(limit);
				displayTodo.push(
					<p key={index}>
						{todoText}
					</p>
				)
				index++;
			} else {
				displayTodo.push(
					<p key={index}>
						{todo}
					</p>
				);
				todo = '';
				index++;
			}

		}
		displayTodo.push(
			<a
				key={index}
				onClick={this.showLess}>
				Show Less
			</a>
		);
		this.setState({displayTodo});
		increaseHeight(displayTodo.length);
	}

	render() {
		const limit = 48;
		// console.log ('this.props.todo.length:', this.props.todo.length)
		// const { increaseHeight } = this.props;
		const { height, displayTodo } = this.state;
		if(this.props.todo.length > limit && !displayTodo.length) {
			const { todo } = this.props;
			let todoText = todo.substring(0, 45);
			console.log ('todoText:', todoText)
			return (
				<span>
					{todoText}
					<a
						onClick={this.showMore}>
						...
					</a>
				</span>
			)
		} else if(displayTodo.length) {
				return (
					<div id="display-todo">
						{displayTodo}
					</div>
				)

		} else {
			const { todo } = this.props;
			return (
				<span>
					{todo}
				</span>

			)
		}
	}

}

export default TodoText;
