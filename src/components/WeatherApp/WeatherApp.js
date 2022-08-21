import React from 'react'
import Search from '../Search/Search'

import './WeatherApp.css'

const WeatherApp = () => {
  return (
    <div className='WeatherApp'>
      <h1>Weather App</h1>
      <Search />
    </div>
  )
}

export default WeatherApp