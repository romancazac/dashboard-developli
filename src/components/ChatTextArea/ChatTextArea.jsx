import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const ChatTextArea = () => {
   return (
      <div className='flex items-center bg-white rounded-xl p-1 sticky bottom-5'>
         <textarea name="message" placeholder='Type your message here...' className='w-full outline-none p-2 resize-none' />
         <button className='rounded-xl h-[52px] w-[52px] flex items-center justify-center bg-green text-white'>
            <PaperAirplaneIcon className='w-5'/>
         </button>
      </div>
   )
}
