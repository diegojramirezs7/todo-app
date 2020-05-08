import React from 'react';
import Todos from './Todos';
import Header from './layout/Header';
import AddTodo from './AddTodo';
import {v4} from "uuid";



//class based component that will contain the entire app
class TodoApp extends React.Component {
	state = {
		todos: [
			{
				id: v4(),
				title: "Setup development environment",
				completed: true
			}, 
			{
				id: v4(), 
				title: "develop webiste and add content",
				completed: false
			},
			{
				id: v4(),
				title: "deploy to live server",
				completed: false
			}
		]
	};

	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id){
					//check for all ids, change the one that matches 
					//it will be the one that triggered the event. 
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteTodo = (id) => {

		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id: v4(),
			title: title,
			completed: false
		};

		this.setState({
			//add new item to the existing todos list (grabbed using the ... operator)
			todos: [...this.state.todos, newTodo]
		});
	};

	render(){
		return (
			//todos can be accessed in Todos through props
			<div className="container">
				<Header />
				<AddTodo addTodo={this.addTodo} />
				<Todos 
					todos={this.state.todos} 
					handleChange={this.handleChange}
					deleteTodo={this.deleteTodo} 
				/>
			</div>
		);
	}
}

export default TodoApp;