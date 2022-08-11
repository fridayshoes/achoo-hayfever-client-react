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
      body: JSON.stringify({value: this.props.location}),
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

  componentDidUpdate(prevProps) {
    console.log(this.props.location)
    if (prevProps.location !== this.props.location) {
      this.callSERVER();
    }
  }

  render() {
    const { error, isLoaded, pollenResponse } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Where will you be sneezing from?</div>;
    } else {
      return (
        <div>
          <h1>Achoo!</h1>
          <h2>Here's your sneeze stats for {this.props.location}</h2>
          {console.log(pollenResponse)}
          {pollenResponse.map((pollen, index) => (
            <div key={index}>
              <div>Grass Pollen:
              <br></br>
              <h1>{pollen.Count.grass_pollen}</h1>{pollen.Risk.grass_pollen}
              </div>
              <div>
              Tree Pollen:
              <h1>{pollen.Count.tree_pollen}</h1>{pollen.Risk.tree_pollen}
              </div>
              <div>
              Weed Pollen:
              <h1>{pollen.Count.weed_pollen}</h1>{pollen.Risk.weed_pollen}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Pollen;
