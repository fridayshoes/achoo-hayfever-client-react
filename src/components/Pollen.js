import React, { Component } from 'react';

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = { pollenResponse: "" };
  }

  callSERVER() {
    fetch("http://localhost:3000/pollen")
      .then(res => res.text())
      .then(res => this.setState({ pollenResponse: res}))
      .catch(err => err);
  }
  
  componentDidMount() {
    this.callSERVER();
  }  

  render() {
    return (
      <div>
        <h1>Pollen Count from React</h1>
        <p>{this.state.pollenResponse}</p>
      </div>
    );
  }

}

export default Pollen;