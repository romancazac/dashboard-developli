import React from 'react'
import { Outlet } from 'react-router-dom'

import CarouselAuth from '../../components/CarouselAuth/CarouselAuth'
import logo from '../../assets/img/logo.png'


export const Auth = () => {
  return (
    <div className='relative h-[100vh] bg-white '>
      <div className=" w-full h-full mx-auto flex lg:flex-col lg:flex-col-reverse">
        <div className="flex-1 flex  justify-center items-center pr-10 lg:py-20">
          <div className='pl-2'>
            <h1 className='text-2xl font-bold mb-4'>Hi There, Welcome!</h1>
            <p className='mb-10'>By sign in or sign up with your account, you can get all features here.</p>
            <Outlet />
          </div>

        </div>
        <div className="relative z-10 flex-1 p-8 bg-bgAuth bg-no-repeat bg-cover lg:hidden ">
          <a href="#" className="mb-4 block"><img src={logo} alt="logo" /></a>
          <CarouselAuth />
        </div>
      </div>


    </div>
  )
}
