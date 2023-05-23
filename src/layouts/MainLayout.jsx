import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import { Profile } from '../components/Profile/Profile'
import { Header } from '../components/Header/Header'
export const MainLayout = () => {

  return (
    <>
      <Aside />
      <div className='ml-[260px] px-6'>
        <Header />
        <div className="flex gap-10">
          <div className="flex-auto">
            <Outlet />
          </div>
          <Profile />
        </div>
      </div>
    </>
  )
}
