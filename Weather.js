import React, { useState } from 'react';

import './Weather.css';


 
const Weather = () => {

  const [city, setCity] = useState('');

  const [weather, setWeather] = useState(null);
 
  const fetchWeather = async () => {

    const API_KEY = '7d6f56049ce5c3d040a94691fa379b84';

    const response = await fetch( 
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

    const data = await response.json();

    setWeather(data);

  };
 
  const handleSearch = (e) => {

    e.preventDefault();

    fetchWeather();

  };
 
  return (

    <div className="weather-container">

      <h1>Weather App</h1>

      <form onSubmit={handleSearch}>

        <input

          type="text"

          value={city}

          onChange={(e) => setCity(e.target.value)}

          placeholder="Enter city name"

          required

        />

        <button type="submit">Search</button>

      </form>

      {weather && (

        <div className="weather-details">

          <h2>{weather.name}</h2>

          <p>Weather: {weather.weather[0].description}</p>

          
          <p>Temperature: {weather.main.temp} °C</p>

         
          <p>Humidity: {weather.main.humidity} %</p>

          <p>Wind Speed: {weather.wind.speed} m/s</p>

        </div>

      )}

    </div>

  );

};
 
export default Weather;
 