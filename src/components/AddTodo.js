import React, {Component} from 'react';

class AddTodo extends Component{
	state = {
		title: ""
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({
			title: ""
		});
	};

	render(){
		return (
			<form className="form-container" onSubmit={this.onSubmit}>
				<input 
					type="text" placeholder="add todo" 
					className="input-text" 
					name="title"
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type="submit" value="submit" className="input-submit" name="input-submit"/>
			</form>
		);
	}
}

export default AddTodo;