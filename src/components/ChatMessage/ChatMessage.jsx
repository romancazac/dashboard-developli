import React from 'react'
import { useSelector } from 'react-redux'

export const ChatMessage = ({idUser, message, time}) => {
   const {user} = useSelector(state => state.auth)
   return (
     

         <div className={`flex flex-col items-end max-w-[515px]  mb-8 ${user.id === idUser ? 'ml-auto' : ''}`}>
            <p className={`rounded-xl text-sm p-3 ${user.id === idUser ? ' bg-[#1F8FFF] text-white' : ''}`}>
            {message}
            </p>
            <span className='mt-3 block text-gray'>{time}</span>
         </div>
  
   

   )
}
