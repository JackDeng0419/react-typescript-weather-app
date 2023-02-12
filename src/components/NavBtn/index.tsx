import React, { useState } from 'react'
import './index.css'

type Props = {
    className: string
}

export const NavBtn = (prop: Props) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive)
    }

  return (
    <div className={`nav-btn ${isActive ? 'active' : ''}`} onClick={() => {handleClick()}}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
    </div>
  )
}
