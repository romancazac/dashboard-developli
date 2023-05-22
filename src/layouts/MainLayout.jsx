import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import { Profile } from '../components/Profile/Profile'
import { Header } from '../components/Header/Header'
export const MainLayout = () => {
  return (
    <div className='flex '>
      <Aside />
      <div className='flex-auto ml-[260px] px-6'>
        <Header/>
        <Outlet />
      </div>

      <Profile />
    </div>
  )
}
