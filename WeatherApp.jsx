import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'

const WeatherApp = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search-icon">
                <img src={search_icon} alt="" />

            </div>

        </div>
         
    </div>
  )
}
