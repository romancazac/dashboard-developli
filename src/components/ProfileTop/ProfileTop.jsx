import React from 'react'
import Select from '../../components/ui/Select'
import { EyeIcon } from '@heroicons/react/20/solid'
export const ProfileTop = () => {
   const dataVisible = [
      {
         id: 1,
         name: "Hidden"
      },
      {
         id: 2,
         name: "Vissible"
      },
   ]
   return (

      <div className="flex justify-between gap-2 mb-7">
         <div className="">
            <h3 className="text-2xl font-bold">My resume</h3>
            <p className="text-gray text-sm">Yor personal data</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
               <span className='text-gray'>Status</span>
               <Select data={dataVisible} onDispatch={() => console.log('dispatch')} className={'bg-white w-[144px] rounded-xl h-[40px] font-bold text-blackColor'}/>
            </div>
            <button className="btn-block btn-block_gray gap-2">
               <EyeIcon className='w-4' />
               Preview
            </button>
         </div>
      </div>
   )
}
