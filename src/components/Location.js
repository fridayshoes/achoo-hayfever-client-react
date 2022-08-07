import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The location you entered was:' + this.state.value)
    event.preventDefault();

  fetch('http://localhost:3000/users', {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((response) => response.json())
.then((result) => {
  console.log(result)
})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
      <label>Enter your location: 
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
  }
}

export default Location;