import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Authentcation from "./Components/Authentication/Authentcation";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column">
        <h1>Log in Form</h1>
        <Authentcation />
      </div>
    </div>
  );
}

export default App;
