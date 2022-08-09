import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Pollen from "./components/Pollen";
import User from "./components/User";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("");
  console.log(location);
  return (
    <div className="App">
      <Pollen location={location}/>
      <br></br>
      <Location setLocation={setLocation} />
      <User />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
