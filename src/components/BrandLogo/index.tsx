import React from 'react'
// import Logo from '../../assets/images/brand-logo.jpg'
import './index.css'

type Props = {
    className?: string
}

export const BrandLogo = (props: Props) => {
  return (
    <a href='/' className={`${props.className} brand-logo`}>
        <p>Minimis</p>
    </a>
  )
}
