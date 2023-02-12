import React from 'react'
import plusIcon from '../../assets/images/Plus Icon.png'
import './index.css'

export const AddCityCard = () => {
  return (
    <div className='add-city-card'>
        <div className='add-city'>ADD CITY</div>
        <img className='plus-icon' src={plusIcon} alt="plus icon" />
        <div className='city-view'></div>
    </div>
  )
}
