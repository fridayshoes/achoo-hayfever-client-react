import React, { Component } from 'react';

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = { pollenResponse: "" };
  }

  callSERVER() {
    fetch("/data.json"
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(res => res.json())
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