import React from 'react'
import { Aside } from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import { Filters } from '../components/Filters/Filters'
import { Header } from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { TopCandidats } from '../components/TopCandidats/TopCandidats'

export const JobLayout = () => {
   return (
      <>

         <Aside />
         <div className='ml-[260px] px-6'>
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
