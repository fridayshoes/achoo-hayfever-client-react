import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		// this.state = { value: '' };
		this.state = {
			email: "",
			mobile: "",
			location: "",
			pollen: null,
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log(this.handleSubmit);
		}

	// this sets the state for each field on our form
	handleChange(event, field) {
		// console.log("form input change")
		// console.log(event, field)
		this.setState({ [field]: event.target.value});
		// console.log("handleChange2")
		// console.log(event.target.value)
	}

	handleSubmit(event) {
		console.log("form submit")
		console.log(event)
		// alert('A form was submitted: ' + this.state.value);
		alert('A form was submitted: ' + this.state.email);
		event.preventDefault();
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			// We convert the React state to JSON and send it as the POST body
			body: JSON.stringify(this.state)
		})
			.then(response => {
				console.log(response)
				if (!response.ok) {
					return "not ok"
					// throw new Error(response.statusText)
				}
				console.log(response)
				return response.json()
			}).catch(err=>{
				window.alert('Registration failed');
				console.log(err)
		})
		// 	console.log("fetch response")
		// 	console.log(response)
		// 	return response.json();
		// });
	}

	render() {
		return (
			<div>
			<h2 className="title">Sign up</h2>
			<h5>Get SMS pollen alerts and allergy advice direct to your phone</h5>
			<form onSubmit={this.handleSubmit}>
			<div class="parentContainer">
			<div class="childContainer">
				<label for="email">Email: 
				<input type="text" id="email" value={this.state.email} onChange={(event)=>this.handleChange(event, "email")} />
				</label>
			</div>
			<div class="childContainer">	
				<label for="mobile">Mobile: 
				<input type="text" id="mobile" value={this.state.mobile} onChange={(event)=>this.handleChange(event, "mobile")} />
				</label>
			</div>	
			</div>
			<div class="parentContainer">
			<div class="childContainer">	
				<label for="location">Location: 
				<input type="text" id="location" value={this.state.location} onChange={(event)=>this.handleChange(event, "location")} />
				</label>
			</div>
			<div class="childContainer">
				<label for="Pollen">Pollen Type:<br></br>
          <select class="selectorBox" value={this.state.pollen} onChange={(event)=>this.handleChange(event, "pollen")}>
						<option value=""></option>
						<option value="grass">Grass</option>
            <option value="tree">Tree</option>
            <option value="weed">Weed</option>
          </select>
        </label>
			</div>
			</div>
				{/* <div class="parentContainer">
				<div class="childContainer"></div>
				<div class="childContainer"> */}
				<input class="buttonUser" type="submit" value="Submit" />
				{/* </div>
				<div class="childContainer"></div>
				</div> */}
			</form> 
			</div>
		);
	}	
				
}
export default User;