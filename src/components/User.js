import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log(this.handleSubmit);
		}

	handleChange(event) {
		console.log("form input change")
		console.log(event)
		// this.setState({[event.target.email]: event.target.email});
		this.setState({value: event.target.value});
		console.log(event.target.email)
	}

	handleSubmit(event) {
		console.log("form submit")
		console.log(event)
		alert('A form was submitted: ' + this.state.value);

		fetch('http://localhost:3000/users', {
			method: 'POST',
			// We convert the React state to JSON and send it as the POST body
			body: JSON.stringify(this.state)
		}).then(function(response) {
			console.log("fetch response")
			console.log(response)
			return response.json();
		});

		event.preventDefault();
	}

	render() {
		return (
			<div><h2 className="title">Sign up</h2>
			<form onSubmit={this.handleSubmit}>
				<label for="email">Email: 
				<input type="text" id="email" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form> 
			</div>
		);
	}	
				
}
export default User;