import React from 'react'
import { UserChat } from '../components/UserChat/UserChat'
import { ChatMessages } from '../components/ChatMessages/ChatMessages'

export const Messages = () => {
   return (
      <div className='flex gap-[2px]  h-[100%]'>
         <div className="flex-[0_1_35%] min-w-[400px] bg-white rounded-tl-xl py-9 ">
            <div className="px-5 mb-7 ">
               <h3 className='text-[27px] font-bold mb-8'>Messages</h3>
               <div className="flex items-center  bg-[#F3F3F3] rounded-xl py-3 pl-5 pr-1">
                  <div className="flex items-center gap-3 mr-1">
                     <span className='icon-search text-2xl text-[#7F879E]'></span>
                     <input type="text" placeholder='Search ' className='p-1 outline-0 bg-transparent' />
                  </div>
               </div>
            </div>
            <div className='overflow-auto h-[71%]'>
               <UserChat
                  name='Ralph Edwards'
                  text='Haha thats terrifying 😂'
                  time='7: 30 am'
                  online={true}
                  open={true}
               />
               <UserChat
                  name='Albert Flores'
                  text='Haha thats terrifying 😂'
                  time='5: 30 am'
                  online={false}
                  open={false}
               />
               <UserChat
                  name='Albert Flores'
                  text='Haha thats terrifying 😂'
                  time='5: 30 am'
                  online={false}
                  open={false}
               />
               <UserChat
                  name='Albert Flores'
                  text='Haha thats terrifying 😂'
                  time='5: 30 am'
                  online={false}
                  open={false}
               />
               <UserChat
                  name='Albert Flores'
                  text='Haha thats terrifying 😂'
                  time='5: 30 am'
                  online={false}
                  open={false}
               />
           
            </div>

         </div>
         <div className="flex-auto  ">
            <ChatMessages />
         </div>
      </div>
   )
}
