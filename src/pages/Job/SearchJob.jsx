
import CardJob from '../../components/CardJob/CardJob'
import { BtnLoader } from '../../components/ui/BtnLoader'
import { TopCandidats } from '../../components/TopCandidats/TopCandidats'
import { SearchBar } from '../../components/SearchBar/SearchBar'

import { useDispatch, useSelector } from 'react-redux'
import {  setTotalCount } from '../../redux/slices/jobsSlice'
import { Spinner } from '@material-tailwind/react'



export const SearchJob = () => {


  const dispatch = useDispatch()
  const { jobsData,  totalItems, status} = useSelector(state => state.jobs)


 


  // load more
  const loadMoreJobs = () => {
    dispatch(setTotalCount())
  }


  return (
    <>

      <SearchBar />
      <TopCandidats />


      {jobsData.length === 0 ? (
        status === "loading" ? <Spinner className='mx-auto' /> : 'No Available jobs'
      ) : (
        jobsData.map((item) => <CardJob {...item}  />)
      )}

      {totalItems == jobsData.length || <BtnLoader onClick={loadMoreJobs} loading={status}>Load More</BtnLoader>}

     
    </>
  )
}
