import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <WeatherSearch defaultCity="Warsaw"/>
      </div>
    </div>
  );
}

export default App;
