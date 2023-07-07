import React, { useEffect, useState } from 'react'

import avatar from '../../assets/img/avatar.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { useDispatch } from 'react-redux'
import { setMessages } from '../../redux/slices/chatSlice'
export const UserChat = ({ name, text, avata, time, online, open, id, idUser }) => {
   const dispatch = useDispatch()
   const combineId = id + '' + idUser
   const idn = combineId.split('').sort().join('');
 
   const obj = {
       "idn":idn,
      "messages": [
         {
            "userId": idUser,
            "text": ""
         }
      ]
   }
   const fetchChat = async () => {
      try {
         const res = await axios.get(`${BASE_URL}/messages?idn=${idn}`);

         dispatch(setMessages(res.data[0]))


         if(res.data.length <= 0 ){
          const res =  await axios.post(`${BASE_URL}/messages`,obj);
          dispatch(setMessages(res.data[0]))
         }

      } catch (error) {
         console.log(error)
      }

   }

   return (
      <Link to={`/messages/${idn}`} onClick={fetchChat} className={`flex items-center gap-3 p-5 cursor-pointer [&.active]:bg-[#DBF2D7]  ${open ? 'active' : ''}`}>
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

      </Link>
   )
}
