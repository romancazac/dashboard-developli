import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import { Filters } from '../components/Filters/Filters'
import { Header } from '../components/Header/Header'


export const JobLayout = () => {
   return (
      <>

         <Aside />
         <div className='page__layout'>
            <Header />
            <div className="flex gap-10">
               <div className="flex-auto pb-5">
                  <Outlet />
               </div>
               <Filters/>
            </div>
         </div>

      </>
   )
}
