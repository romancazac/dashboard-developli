import React from 'react'
import avatar from '../../assets/img/avatar.png'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='flex justify-between items-center pt-6 mb-14'>
      <div className="flex items-center max-w-[336px] bg-white rounded-xl py-1 pl-5 pr-1">
        <div className="flex items-center gap-3 mr-1">
          <span className='icon-search text-2xl text-[#7F879E]'></span>
          <input type="text" placeholder='Search for a job' className='p-1 outline-0' />
        </div>
        <button className='flex items-center justify-center h-10 px-4 rounded-xl bg-[#EAEDEE] text-blackColor'>All</button>
      </div>
      <ul className='flex gap-7'>
        <li className='relative flex justify-center items-center w-12 h-12 rounded-full bg-white duration-300 ease-in-out hover:bg-green hover:text-white'>
          <button className='icon-notification text-2xl'></button>
          <span className='absolute top-0 right-[-50%] translate-x-[-50%] bg-[#FE6E66] text-xs text-white font-medium px-1 py-[2px] rounded-xl'>218</span>
        </li>
        <li className='relative flex justify-center items-center w-12 h-12 rounded-full bg-white  duration-300 ease-in-out hover:bg-green hover:text-white'>
          <Link to='/resume' className='icon-setting text-2xl'></Link>
     
        </li>
        <li className='relative flex justify-center items-center w-12 h-12 rounded-full bg-white  duration-300 ease-in-out hover:bg-green hover:text-white'>
          <Link to='/dashboard' className='w-10 w-10 overflow-hidden rounded-full'>
            <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
          </Link>
     
        </li>
   
      </ul>
    </header>
  )
}
