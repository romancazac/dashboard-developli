import React, { useState } from 'react'
import avatar from '../../assets/img/avatar.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchJob } from '../../redux/slices/jobsSlice';

import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid';
import { setOpenNav, setOpenProfile } from '../../redux/slices/uiSlice';
export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {asideNavOpen,asideProfileOpen} = useSelector(state => state.ui)
  const [search, setSearch] = useState({name:''})
  const onSearch = () => {
    dispatch(setSearchJob({name:search.name}))
    navigate('search-job')
  }
  return (
    <header className='flex justify-between items-center pt-6 mb-14 md:mb-5'>
      <button onClick={() => dispatch(setOpenNav(!asideNavOpen))} className="header__burger hidden lg:block"><Bars3BottomLeftIcon className='w-6'/></button>    
      <div className="flex items-center max-w-[336px] bg-white rounded-xl py-1 pl-5 pr-1 md:hidden">
        <div className="flex items-center gap-3 mr-1">
          <span className='icon-search text-2xl text-[#7F879E]'></span>
          <input value={search.name} onChange={(e) => setSearch({name:e.target.value})} type="text" placeholder='Search for a job' className='p-1 outline-0' />
        </div>
        <button onClick={onSearch} className='flex items-center justify-center h-10 px-4 rounded-xl bg-[#EAEDEE] text-blackColor'>All</button>
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
          <Link 
          onClick={() => dispatch(setOpenProfile(!asideProfileOpen))}
          to='/dashboard' className='w-10 w-10 overflow-hidden rounded-full relative z-10'>
            <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
          </Link>
     
        </li>
   
      </ul>
    </header>
  )
}
