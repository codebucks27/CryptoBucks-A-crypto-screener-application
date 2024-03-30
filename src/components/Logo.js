import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"


const Logo = () => {
  return (
    <Link to="/"
    className=''
    
    > 

    <img src={logoSvg} alt='Intersentifore' srcSet='' className='invert' />
    </Link>
  )
}

export default Logo