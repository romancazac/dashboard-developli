import React from 'react'
import ButtonIcon from '../ui/ButtonIcon'

export const ProfileItemIcon = ({ icon,name,position,term }) => {
   return (
      <div className="flex gap-3 mb-3">
         
         <ButtonIcon
            icon={false}
            className="w-[54px] h-[54px] flex-[0_0_54px] bg-[#F15A25] text-white"
         >{icon}</ButtonIcon>
         <div className='flex-auto'>
            <h4 className="font-bold mb-1">{name}</h4>
            <span className="block font-bold text-gray text-xs mb-1">{position}</span>
            <span className="block font-bold  text-gray text-xs mb-1">{term}</span>
         </div>
         <div className="flex items-center gap-5 ">
            <button className="icon-pencil hover:text-green ease-in-out duration-300"></button>
            <button className="icon-bin2 text-[#E60019] hover:text-green ease-in-out duration-300"></button>
         </div>
      </div>
   )
}
