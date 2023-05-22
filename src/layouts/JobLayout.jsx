import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import { Filters } from '../components/Filters/Filters'
import { Header } from '../components/Header/Header'

export const JobLayout = () => {
   return (
      <div className='flex'>

         <Aside />
         <div className='flex-auto ml-[260px] px-6'>
            <Header/>
            <Outlet />
         </div>
         <Filters />

      </div>
   )
}
