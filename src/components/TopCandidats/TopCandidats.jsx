import { Button } from '@material-tailwind/react'

// import { useSelector } from 'react-redux'
import Select from '../ui/Select'
// import { useDispatch } from 'react-redux'
// import { setSort } from '../../redux/slices/filterSlice';
export const TopCandidats = () => {
  // const dispatch = useDispatch()
  // const { experience, category, employment, salary, location } = useSelector(state => state.filter);
  // const { totalCount} = useSelector(state => state.jobs);
  // const arrLabel = [...experience, ...category, ...employment, ...salary, ...location];
 
 
 

  const dataSort = [
    {
      id: 1,
      name: 'Most relevant',

    },
    {
      id: 2,
      name: 'Newest'

    },
    {
      id: 3,
      name: 'Client rating'

    },
  ]
 
  // const onDispatchSort = (value) => {
  //   dispatch(setSort(value))
  // }
  return (
    <div className=' mb-5'>
      <div className="flex justify-between mb-3">
        <div className="mr-[15px]">
          <h1 className="text-black text-2xl font-bold mb-2 sm:text-base">Recomendation</h1>
          <p className="text-gray ">Available  Jobs</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className='whitespace-nowrap text-gray md:hidden'>sort by: </span>
          <Select data={dataSort}    className={'bg-white w-[144px] rounded-[16px]'} />
        </div>
      </div>
      <div className="flex gap-[10px] flex-wrap">

          <Button variant="text" className="flex items-center gap-2 border rounded-[16px] px-[10px] py-[5px] normal-case">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          Btn
        </Button>
    
      

      </div>
    </div>
  )
}
