import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"


const Logo = () => {
  return (

    <>
      <div className='flex justify-between w-full items-center px-4 lg:px-16 py-4 font-bold'>

        <Link to="/"
          className=''

        >

          <img src={logoSvg} alt='Intersentifore' srcSet='' className='invert' />
        </Link>
        <div className='flex gap-4 items-center'>

          <Link to="/stock"
            className=''>
            Stocks
          </Link>

          <Link to="/prediction"
            style={{ background: 'black', padding: "10px 30px", color: 'white', borderRadius: '30px' }}>
            Predict
          </Link>
        </div>


      </div>
    </>
  )
}

export default Logo