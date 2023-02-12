import React from 'react'
import "./index.css"
import { BrandLogo } from '../BrandLogo/index';
import { NavBtn } from '../NavBtn/index';
import { ThemeBtn } from '../ThemeBtn/index';

export const Header = () => {
  return (
    <div className="header">
        {/* <div className='nav-btn'>Nav</div> */}
        <NavBtn className='nav-btn'/>
        <BrandLogo className='logo'/>
        <div className='date'>T O D A Y</div>
        {/* <div className='theme'>Light Dark</div> */}
        <ThemeBtn className='theme'/>
    </div>
  )
}
