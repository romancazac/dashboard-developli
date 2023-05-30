import React from 'react'
import ButtonIcon from '../ui/ButtonIcon'

export const ProfileSection = ({title,children}) => {
   return (
      <div className="mb-[23px] p-6 rounded-xl bg-white">
         <div className="flex justify-between items-center gab-1 mb-7">
            <span className='text-blackColor font-bold text-lg'>{title}</span>
            <ButtonIcon
               icon="icon-pencil"
               className="w-[31px] h-[31px]"
               onClick={() => console.log("click")}
            />
            
         </div>
         {children}
      </div>
   )
}
