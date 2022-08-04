import React, { Component } from 'react';

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      isLoaded: false,  
      pollenResponse: [] 
    };
  }

  callSERVER() {
    fetch("/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ 
            isLoaded: true,
            pollenResponse: result
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  componentDidMount() {
    this.callSERVER();
  }  

  render() {
    
    const { error, isLoaded, pollenResponse } = this.state;

    if (error) {
      return (
        <div>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <h1>Pollen Count from React</h1>
          {console.log(pollenResponse)}
          {pollenResponse.map(pollen => 
          <div>Grass Pollen {pollen.Count.grass_pollen}</div>)}
          {pollenResponse.map(pollen => 
          <div>Tree Pollen {pollen.Count.tree_pollen}</div>)}
          {pollenResponse.map(pollen => 
          <div>Weed Pollen {pollen.Count.weed_pollen}</div>)}
        </div>
      );
    }  
  }

}

export default Pollen;