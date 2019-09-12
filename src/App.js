import React from "react";
import "./App.css";
import Space from './components/space';
import Picture from './components/Picture';
import DropDown from './components/DropDown';




function App() {
  return (
  <div className="App"  >
      
      <h1 className= "h1Title">
       <div className="dd">
        <DropDown/>
       </div>
        <div className = "ddtitle">

        Nasa Data
        </div>
        
      </h1>
      <div className= "DataContainer" >
        <Picture />
        <h2 className="h2Title">Astroid data Below</h2> 
        <div className="ApiData" Id="DataContainer">
          <Space/>
        </div>
      </div>
    </div>
  );
}

export default App;
