import React from "react"
import "./WeatherDisplay.css"

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <div className="temperature">
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="description">{weather.weather[0].description}</p>
        </div>
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      </div>
      <div className="additional-info">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  )
}

export default WeatherDisplay

