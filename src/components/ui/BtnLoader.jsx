import { Spinner } from '@material-tailwind/react'
import React from 'react'

export const BtnLoader = ({ children }) => {
   return (

         <button className='flex items-center justify-center mx-auto gap-2  h-[40px]  text-blackColor font-bold px-5 rounded-xl border'>
            {children}
            <Spinner className='w-3 h-3 text-black' />
         </button>
      
   )
}
