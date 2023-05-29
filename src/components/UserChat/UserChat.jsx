import React from 'react'

import avatar from '../../assets/img/avatar.png'
export const UserChat = ({name, text, avata, time, online, open}) => {
   return (
      <div className={`flex items-center gap-3 p-5 cursor-pointer [&.active]:bg-[#DBF2D7]  ${open ? 'active' : '' }`}>
         <div className="relative flex-[0_0_54] w-[54px] h-[54px] rounded-full">
            <img src={avatar} alt="avatar" className='w-full object-cover' />
            <span className={`absolute top-0 right-[-5px] block w-[10px] h-[10px] rounded-full  border border-[#fff] ${online ? 'bg-green ' : 'bg-[#F59A74]'}`}></span>
         </div>
         <div className="flex w-full">
            <div className="flex-auto mr-2">
               <span className='block text-sm font-bold mb-1'>{name}</span>
               <p className="text-blackColor text-xs">{text}</p>
            </div>
            <div>
               <span className='text-gray text-xs'>{time}</span>
               <span className='flex items-center justify-center w-5 h-5 ml-auto bg-[#1F8FFF] text-white text-[10px] rounded-full'>2</span>
            </div>
         </div>

      </div>
   )
}
