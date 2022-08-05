import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {  
				email: ""
			};
		}

		handleChange = (event) => {
			this.setState({[event.target.name]: event.target.value});
  	}

		handleSubmit = (event) => {
			alert('A form was submitted: ' + this.state);

			fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
			}).then(function(response) {
        console.log("hello we're here")
				console.log(response)
				return response.json();
      });

			event.preventDefault();
}

	render() {
		return (
			<div><h2 class="title">Sign up</h2>
			<form onSubmit={this.handleSubmit}>
				<label for="email">Email:
				<input type="text" id="email" email="email" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input class="post-button" id="submit" type="submit" value="Submit" />
			</form> 
			</div>
		);
	}	
				
}
export default User;