import React, { Component } from "react";

class Pollen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pollenResponse: [],
    };
    this.location = props.location;
  }

  callSERVER() {
    fetch("http://localhost:3000/pollen", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.location),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pollenResponse: result,
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.callSERVER();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.callSERVER();
  //   if (prevState.location !== this.state.location) {
  //     this.callSERVER();
  //   }
  // }

  render() {
    const { error, isLoaded, pollenResponse } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Achoo! Your pollen monitor</h1>
          {console.log(pollenResponse)}
          {pollenResponse.map((pollen, index) => (
            <div key={index}>
              Grass Pollen:
              {pollen.Count.grass_pollen},{pollen.Risk.grass_pollen}
              <br></br>
              Tree Pollen:
              {pollen.Count.tree_pollen},{pollen.Risk.tree_pollen}
              <br></br>
              Weed Pollen:
              {pollen.Count.weed_pollen},{pollen.Risk.weed_pollen}
              <br></br>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Pollen;
