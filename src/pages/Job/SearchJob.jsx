import { useEffect, useRef, useState } from 'react'

import CardJob from '../../components/CardJob/CardJob'
import { BtnLoader } from '../../components/ui/BtnLoader'
import { TopCandidats } from '../../components/TopCandidats/TopCandidats'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import DetailsPopUp from '../../components/DetailsPopUp/DetailsPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs, setPopUp, setTotalCount } from '../../redux/slices/jobsSlice'
import { Spinner } from '@material-tailwind/react'
import TestPopUp from '../../components/TestPopUp/TestPopUp'


export const SearchJob = () => {
  const [job, setJob] = useState({})

  const dispatch = useDispatch()
  const { jobsData, totalCount, totalItems, status, filter, sort, jobSearch, popUp } = useSelector(state => state.jobs)


  // open pop detail info for jobs

  const handleOpen = (id) => {
    const job = jobsData.filter((obj) => obj.id === id);
    setJob(job[0])

  };



  // load more
  const loadMoreJobs = () => {
    dispatch(setTotalCount())
  }


  // filters params
  const filtersParams = filter?.map((item) => {
    const entries = Object.entries(item)
    const params = entries.map((i) => i.join('='))
    return `&${params}`
  })


  // search params
  const searchQ = jobSearch.name ? `&country=${jobSearch.country}&q=${jobSearch.name} ` : ''



  useEffect(() => {
    dispatch(fetchJobs({ totalCount, filtersParams, sort, searchQ }))
  }, [totalCount, filter, sort, jobSearch])


  return (
    <>

      <SearchBar />
      <TopCandidats />


      {jobsData.length === 0 ? (
        status === "loading" ? <Spinner className='mx-auto' /> : 'No Available jobs'
      ) : (
        jobsData.map((item) => <CardJob {...item} openPop={handleOpen} />)
      )}

      {totalItems == jobsData.length || <BtnLoader onClick={loadMoreJobs} loading={status}>Load More</BtnLoader>}

      {/* <DetailsPopUp open={popUp === 'information'} handleOpen={() => dispatch(setPopUp(''))} {...job} className='overflow-auto' /> */}
      {/* <TestPopUp open={popUp === 'test'} handleOpen={() => dispatch(setPopUp(''))} avatar={job.avatar} name={job.name} /> */}
    </>
  )
}
