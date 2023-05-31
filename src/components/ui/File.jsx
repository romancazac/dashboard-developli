import React from 'react'
import ButtonIcon from './ButtonIcon'
import { DocumentTextIcon } from '@heroicons/react/24/solid'

export const File = ({ name, size, onClick }) => {
   console.log(name)
   return (
      <div className="flex flex-[0_1_calc(50%-12px)] gap-3  p-3 bg-[#F6F8F9] rounded-xl">
         <ButtonIcon
            icon={false}
            className="w-[54px] h-[54px] flex-[0_0_54px] bg-white text-blackColor"
         >

            <DocumentTextIcon className='w-5' />
         </ButtonIcon>

         <div className='flex-auto'>
            <h4 className="font-bold mb-1">{name}</h4>
            <span className="block font-bold text-gray text-xs mb-1">{size}</span>


         </div>
         <button onClick={onClick} className='icon-bin2 text-base hover:text-green'></button>
      </div>
   )
}
