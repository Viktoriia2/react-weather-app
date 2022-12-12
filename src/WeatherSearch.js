import React, { useState } from "react";
import "./WeatherSearch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData();
  }
  function search() {
    let apiKey = "260bbaa7e84e6774b9f60ed1b0d90e23";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter your city..."
                className="user_city"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
              />
              <input
                type="Submit"
                className="button UserEnterButton"
                value=" "
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return;
    <InfinitySpin width="400" color="#4fa94d" />;
  }
}
