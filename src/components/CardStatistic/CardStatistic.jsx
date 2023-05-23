import React from 'react'

export const CardStatistic = ({number,text,color,icon}) => {
   
  return (
    <div className='flex-[0_1_33.3333%] px-[10px]'>
      <div className="flex gap-6 justify-between  bg-white rounded-xl p-5">
         <div className="">
            <span className='block text-blackColor text-[32px] font-bold mb-5'>{number}</span>
            <p className="text-gray text-sm">{text}</p>
         </div>
         <span className={`flex items-center justify-center text-lg w-[40px] h-[40px]  rounded-lg bg-[${color}]`}>
            <span className={icon}></span>
         </span>
      </div>


    </div>
  )
}
