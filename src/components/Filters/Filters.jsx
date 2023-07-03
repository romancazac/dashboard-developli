import { useEffect, useState } from 'react'
import Spollers from '../Spollers/Spollers'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenFilter } from '../../redux/slices/uiSlice'
import { setResetFilter } from '../../redux/slices/jobsSlice'
import { FunnelIcon } from '@heroicons/react/20/solid'

export const Filters = () => {
   const asideData = [
      {
         id: 1,
         title: 'Experience Level',
         label: 'experience',
         items: [
            {
               title: '0-2 years',
               id: 1,
               count: 28
            },
            {
               title: '3-5 years',
               id: 2,
               count: 713
            },
            {
               title: '6-9 years',
               id: 3,
               count: 188
            },
            {
               title: '10 years',
               id: 4,
               count: 188
            },
         ]


      },
      {
         id: 2,
         title: 'Category',
         label: 'category',
         items: [
            {
               title: 'Develope',
               id: 1,
               count: 28
            },
            {
               title: 'Design',
               id: 2,
               count: 713
            },
            {
               title: 'SMM Content',
               id: 3,
               count: 188
            },
            {
               title: 'Marketing',
               id: 4,
               count: 188
            },
         ]


      },
      {
         id: 3,
         title: 'Type of employment',
         label: 'types',
         items: [
            {
               title: 'Fulltime',
               id: 1,
               count: 28
            },
            {
               title: 'Part-Time',
               id: 2,
               count: 713
            },
            {
               title: 'Remote',
               id: 3,
               count: 188
            },
            {
               title: 'Internship/Trainee',
               id: 4,
               count: 188
            },
            {
               title: 'Hourly',
               id: 5,
               count: 188
            },
         ]


      },
      {
         id: 4,
         title: 'Salary Range',
         label: 'salary',
         items: [
            {
               title: '2000',
               id: 1,
               count: 28
            },
            {
               title: '3000',
               id: 2,
               count: 713
            },
            {
               title: '4000',
               id: 3,
               count: 188
            },
            {
               title: '7000',
               id: 4,
               count: 188
            },
            {
               title: '8000',
               id: 5,
               count: 188
            }
         ]


      },
      {
         id: 5,
         title: 'Location',
         label: 'country',
         items: [
            {
               title: 'Saudi Arabia',
               id: 1,
               count: 28
            },
            {
               title: 'United States',
               id: 2,
               count: 713
            },
            {
               title: 'Germany',
               id: 3,
               count: 188
            },
            {
               title: 'Australia',
               id: 4,
               count: 188
            },
            {
               title: 'Moldova',
               id: 5,
               count: 188
            }
         ]


      }


   ]
   const dispatch = useDispatch()
   const {asideFilter} = useSelector(state => state.ui)
  
   const [open, setOpen] = useState(1);

   const handleOpenSpoller = (value) => {
      setOpen(open === value ? 0 : value);
   };
    const onReset = () => {
     dispatch(setResetFilter())
    }



    const renderTopMob = () => {
       return (
          <>
             {
                asideFilter &&
                <div className="flex justify-between items-center mb-8 mt-10">
                  
                   <button onClick={() => dispatch(setOpenFilter(!asideFilter))} className="flex items-center gap-1 text-[#1B2124] font-bold"><FunnelIcon className='w-4'/>Filters</button>
                   <button onClick={onReset} className="text-[#EE5566]">Clear</button>
                </div>
             }
          </>

       )
    }


   return (


      < >
         <div className={`w-[316px] flex-[0_0_316px] h-full z-30   bg-white rounded-xl px-[20px] py-[25px] xl:fixed xl:w-full xl:inset-0   xl:flex-col ${asideFilter ? 'xl:flex' : 'xl:hidden'}`}>
            {renderTopMob()}
            {
               asideData.map((item) =>
                  <Spollers key={item.id} item={item} handleOpen={handleOpenSpoller} open={open} />
               )
            }
            {
               asideFilter &&
               
               <button onClick={() => dispatch(setOpenFilter(!asideFilter))} className="btn-block btn-block_green max-w-[250px] w-full justify-center mt-auto mx-auto">Show</button>

            }
         </div>
      </>

   )
}
