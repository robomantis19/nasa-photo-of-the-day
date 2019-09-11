import React from "react";
import "./App.css";
import Space from './components/space';

function App() {
  return (
    <div className="App">
      <h1 className= "h1Title">
        Nasa Data
      </h1>
      <div className= "DataContainer">
        <h2 className="h2Title">Api Below</h2> 
        <div className="ApiData">
          <Space/>
        </div>
      </div>
    </div>
  );
}

export default App;
