import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {  
			userList : [] 
		};
  }


	render() {
		return (
			<div>
				<h2 class="title">Sign up</h2>
				<form id="new-user-form" action="/users" method="post">
					<label for="email">Email:</label><br />
					<input type="text" id="email" name="email" value="" /><br />
					<input class="post-button" id="submit" type="submit" value="Submit" />
				</form> 
			</div>
		);
	}	
				
}
export default User;