import logo from "./SneezeBee.svg";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pollen location={location}/>
        <br></br>
        <Location setLocation={setLocation} />
        <User />
        <p>Powered by Mbata, Agyeman, Evans & Johnson</p>      
      </header>
    </div>
  );
}

export default App;
