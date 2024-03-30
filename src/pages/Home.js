import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import { StockProvider } from '../context/StockContext'

const Home = () => {
  return (
    <StockProvider>
    <main className='w-full h-full flex flex-col first-letter:
    content-center items-center relative text-black font-nunito'>
    <div className='w-screen h-screen fixed -z-10'/> 

    <Logo />


    <Outlet />
    </main>
    </StockProvider>
  )
}

export default Home