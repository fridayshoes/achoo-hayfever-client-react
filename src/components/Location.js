import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: null,
      isLoaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLocation = props.setLocation.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("The location you entered was:" + this.state.value);
    event.preventDefault();
    this.setLocation(this.state.value);
  }

  render() {
    // const { error, isLoaded, pollenResponse } = this.state;
    return (
      <div>
        {/* {pollenResponse.updatedAt} */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your location:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Location;
