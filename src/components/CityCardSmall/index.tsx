import React from 'react'
import './index.css'
import weatherIcon from '../../assets/images/Cloudy Icon.png'

export const CityCardSmall = () => {
  return (
    <div>
        <div className='city-card-small'>
            <div className='city'>TUNISIA</div>
            <img className='weather-icon' src={weatherIcon} alt="weather icon" />
            <div className='current-temp'>
                20 <span className='degree-mark'></span>
            </div>
            <div className='weather'>CLOUDY</div>
            <div className='min-max-temp'>
                <div className='min'>
                    <div className='temp'>18</div>
                    <div className='text'>Min</div>
                </div>
                <div className='max'>
                    <div className='temp'>26</div>
                    <div className='text'>Max</div>
                </div>
            </div>
        </div>
    </div>
  )
}
