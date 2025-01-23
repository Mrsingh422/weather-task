import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import WeatherDisplay from "./components/WeatherDisplay"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import "./App.css"

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity")
    if (lastCity) {
      fetchWeather(lastCity)
    }
  }, [])

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
      )
      if (!response.ok) {
        throw new Error("City not found")
      }
      const data = await response.json()
      setWeather(data)
      localStorage.setItem("lastCity", cityName)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchCity) => {
    fetchWeather(searchCity)
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  )
}

export default App

