import { Spinner } from '@material-tailwind/react'
import React from 'react'

export const BtnLoader = ({ children, onClick, loading }) => {
   return (

         <button onClick={onClick} className='flex items-center justify-center mx-auto gap-2  h-[40px]  text-blackColor font-bold px-5 rounded-xl border'>
            {children}
            {
               loading === "loading" ?  <Spinner className='w-3 h-3 text-black' /> : ''
            }
     
         </button>
      
   )
}
