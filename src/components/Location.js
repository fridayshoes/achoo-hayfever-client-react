import { useState } from 'react';
import React from 'react';

function Location() {
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The location you entered was: ${location}`)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Enter your location: 
        <input 
          type="text" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    </div>
  )
}

export default Location;