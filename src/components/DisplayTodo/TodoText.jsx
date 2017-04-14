import React, { Component } from 'react';

class TodoText extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ''
		}

		this.showMore = this.showMore.bind(this);
	}

	showMore() {
		const { todo } = this.props;
		console.log ('todo:', todo)
		this.setState({todo})
	}

	render() {
		const limit = 48;
		if(this.props.todo.length > limit && !this.state.todo) {
			const { todo } = this.props;
			let todoText = todo.substring(0, 45);
			return (
				<span>
					{todoText}
					<a
						onClick={this.showMore}>
						...
					</a>
				</span>
			)
		} else if(this.state.todo) {
			let todo = this.state.todo;
			console.log ('todo.length:', todo.length)

			let displayTodo = [];

			while(todo.length) {
				if(todo.length > limit) {
					let todoText = todo.substring(0, limit);
					todo = todo.slice(limit);
					console.log ('todoText:', todoText)
					console.log ('todo:', todo)
					displayTodo.push(
						<p>
							{todoText}
						</p>
					);
				} else {
					displayTodo.push(
						<p>
							{todo}
						</p>
					);
					todo = '';
				}
			}
			return (
				<div>
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
