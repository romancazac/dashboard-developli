import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from '../ui/Select'
import { MapPinIcon } from '@heroicons/react/20/solid';
// import { setOpenFilter } from "../../redux/slices/filterSlice";
import { setSearchJob, setSearchRes } from '../../redux/slices/jobsSlice';
export const SearchBar = () => {
   const dispatch = useDispatch()
   // const { isMob } = useSelector(state => state.filter);
   const [search, setSearch] = useState({ name: '', country: '' })

const isMob = false;
   const countries = [
      {
         id: 1,
         name: 'Afghanistan'
      },
      {
         id: 2,
         name: 'Albania'
      },
      {
         id: 3,
         name: 'Algeria'
      }, {
         id: 4,
         name: 'Andorra'
      }, {
         id: 5,
         name: 'Moldova'
      }
   ]
   const onDispatchCountries = (value) => {
      setSearch({ ...search, country: value.name });
   }
   const onSearch = () => {
      dispatch(setSearchJob(search))
   }

   const onSearcRes = () => {
      dispatch(setSearchRes())
      setSearch({ name: '', country: '' });
   }

   return (
      <div className='mb-8'>

            <div className="flex items-center bg-white rounded-[16px] shadow-bar text-gray py-[6px] pr-[6px]">
               <div className="flex flex-auto items-center pl-[25px] gap-[12px] border-r md:border-none">
                  <label htmlFor='search' className='icon-search text-[24px] text-green ' />
                  <input
                     value={search.name}
                     onChange={(e) => setSearch({ ...search, name: e.target.value })}
                     className='w-[100%] h-[36px] outline-none' type="text" id='search' placeholder='Product Designer' />
                  {
                     !search.name <= 0 &&
                      <button onClick={onSearcRes} className='px-4 hover:text-green'>X</button>
                  }

               </div>
               <div className="flex flex-auto items-center pl-[16px]  max-w-[544px]">
                  {
                     isMob ?
                        <button onClick={() => dispatch(setOpenFilter(true))} className='rounded-[12px] text-gray ml-auto pr-6'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                           </svg>

                        </button>
                        :
                        <>
                           <label htmlFor='select' className=' text-green ' >
                              <MapPinIcon className="w-6 h-6"/>
                           </label>
                           <Select data={countries} onDispatch={onDispatchCountries} />
                           <button onClick={onSearch} className='bg-green h-[56px] rounded-[12px] text-white px-[55px] ml-[40px]'>Search</button>
                        </>

                  }

               </div>
            </div>
     
      </div>
   )
}
