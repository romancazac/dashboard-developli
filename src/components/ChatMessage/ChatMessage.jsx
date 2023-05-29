import React from 'react'

export const ChatMessage = ({id}) => {

   return (
     

         <div className={`flex flex-col items-end max-w-[515px]  mb-8 ${id ? 'ml-auto' : ''}`}>
            <p className={`rounded-xl text-sm p-3 ${id ? ' bg-[#1F8FFF] text-white' : ''}`}>
               Hello Angelica, good mornin. My name is Edwards I’m recruiter from Shopify
               We have decided that you will take part in the interview session
               for further consideration.
            </p>
            <span className='mt-3 block text-gray'>4:32 Am</span>
         </div>
  
   

   )
}
