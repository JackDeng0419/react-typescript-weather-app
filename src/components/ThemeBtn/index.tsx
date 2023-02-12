import React, { useState } from 'react'
import './index.css'

type Props = {
    className?: string
}

export const ThemeBtn = (prop: Props) => {

    const [isLight, setIsLight] = useState(true);



  return (
    <div className='theme'>
        <span className='text'>LIGHT</span>
        <span className='toggle' onClick={() => {setIsLight(!isLight)}}>
            <span className={`circle ${isLight ? 'light' : 'dark'}`}></span>
            <span className='under-circle'></span>
        </span>
        <span className='text'>DARK</span>
    </div>
  )
}
