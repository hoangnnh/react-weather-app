import React from 'react'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Search from '../Search/Search'
import WeatherForecast from '../WeatherForecast/WeatherForecast'

import './WeatherApp.css'

const WeatherApp = () => {
  return (
    <>
      <h1>Weather App</h1>
      <Search />
      <CurrentWeather />
      <WeatherForecast />
    </>
  )
}

export default WeatherApp