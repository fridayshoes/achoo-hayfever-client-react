import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pollen from './components/Pollen';
import User from "./components/User";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Pollen />
      <br></br>
      <Location />
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