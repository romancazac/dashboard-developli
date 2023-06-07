import { Button } from '@material-tailwind/react'

import { useSelector } from 'react-redux'
import Select from '../ui/Select'
import { useDispatch } from 'react-redux'
import { setFilters, setSort } from '../../redux/slices/jobsSlice'
import { XMarkIcon } from "@heroicons/react/20/solid";
export const TopCandidats = () => {
  const dataSort = [

    {
      id: 1,
      name: 'Newest',
      label:'date'

    },
    {
      id: 2,
      name: 'Client rating',
      label:'rating'
    },
  ]
  const dispatch = useDispatch()
  const { filter, sort } = useSelector(state => state.jobs);
  const onDispatch = (obj) => {
    dispatch(setSort(obj.label))
  }



  return (
    <div className=' mb-5'>
      <div className="flex justify-between mb-3">
        <div className="mr-[15px]">
          <h1 className="text-black text-2xl font-bold mb-2 sm:text-base">Recomendation</h1>
          <p className="text-gray ">Available  Jobs</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className='whitespace-nowrap text-gray md:hidden'>sort by: </span>
          <Select data={dataSort} onDispatch={onDispatch} className={'bg-white w-[144px] rounded-[16px]'} />
        </div>
      </div>
      <div className="flex gap-[10px] flex-wrap">

        {
          filter.map((b) =>
            <Button
              onClick={() => dispatch(setFilters(b))}
              variant="text" className="flex items-center gap-2 border rounded-xl px-[10px] py-[5px] normal-case">
              <XMarkIcon className='w-4' />
              {Object.values(b)}
            </Button>
          )
        }

      </div>
    </div>
  )
}
