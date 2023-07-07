import React from 'react'

import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Aside } from '../components/Aside/Aside'
export const FullPageLayout = () => {

  return (
    <>
    
      <Aside />
      <div className='ml-[260px] px-6 h-[100vh] overflow-hidden lg:ml-0 lg:px-2'>
        <Header />
        <Outlet/>
      </div>
    </>
  )
}
