
import avatar from '../../assets/img/avatar.png'
import ButtonIcon from '../ui/ButtonIcon'
import { ChatMessage } from '../ChatMessage/ChatMessage'
import { ChatTextArea } from '../ChatTextArea/ChatTextArea'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenUsers } from '../../redux/slices/uiSlice'
export const ChatMessages = () => {
   const dispatch = useDispatch()
   const online = true
   const { messages } = useSelector(state => state.chat)


   return (
      < >
         <div className="flex bg-white rounded-tr-xl py-6 pl-10 pr-3 md:pl-3 md:rounded-xl">
            <div className="relative flex-auto hidden md:block">
               <ButtonIcon
                  icon="icon-more"
                  className="w-[36px] h-[36px]"
                  onClick={() => dispatch(setOpenUsers('true'))}
               />
            </div>
            <div className="flex  gap-5">
               <div className="relative flex-[0_0_54] w-[54px] h-[54px] rounded-full">
                  <img src={avatar} alt="avatar" className='w-full object-cover' />
                  <span className={`absolute top-0 right-[-5px] block w-[10px] h-[10px] rounded-full  border border-[#fff] ${online ? 'bg-green ' : 'bg-[#F59A74]'}`}></span>
               </div>
               <div className="flex-auto mr-2">
                  <span className='block text-sm font-bold mb-1'>Ralph Edwards </span>
                  <p className="text-blackColor text-xs">Online</p>
               </div>
            </div>



         </div>
         <div className="pl-10 pr-5 py-5 flex-auto overflow-auto h-[65vh]">
            {
               messages?.chats?.map((m) =>

                  <ChatMessage {...m} />
               )
            }

            {/* <ChatMessage id={true}/> */}

         </div>
         <ChatTextArea setMessages={''} />
      </>
   )
}
