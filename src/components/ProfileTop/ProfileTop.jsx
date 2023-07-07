import React from 'react'
import Select from '../../components/ui/Select'
import { EyeIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { setAvailabil } from '../../redux/slices/profileSlice'
export const ProfileTop = () => {
   const dispatch = useDispatch();

   const dataVisible = [
      {
         id: 0,
         name: "Vissible",
         label: true
      },
      {
         id: 1,
         name: "Hidden",
         label: false
      }

   ]

  
   return (

      <div className="flex justify-between flex-wrap gap-2 mb-7">
         <div >
            <h3 className="text-2xl font-bold">My resume</h3>
            <p className="text-gray text-sm">Yor personal data</p>
         </div>
         <div className="flex items-center gap-3">
            {/* <div className="flex items-center gap-3">
               <span className='text-gray sm:hidden'>Status</span>
               <Select data={dataVisible} onDispatch={(s) => dispatch(setAvailabil(s.label))} className={'bg-white w-[144px] rounded-xl h-[40px] font-bold text-blackColor'} />
            </div>
            <button className="btn-block btn-block_gray gap-2 ">
               <EyeIcon className='w-4' />
               Preview
            </button> */}
         </div>
      </div>
   )
}
