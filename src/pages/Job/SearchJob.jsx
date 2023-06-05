import { useEffect, useRef, useState } from 'react'

import CardJob from '../../components/CardJob/CardJob'
import { BtnLoader } from '../../components/ui/BtnLoader'
import { TopCandidats } from '../../components/TopCandidats/TopCandidats'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import DetailsPopUp from '../../components/DetailsPopUp/DetailsPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJob, fetchJobs, setTotalCount } from '../../redux/slices/jobsSlice'


export const SearchJob = () => {
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState({})
  const dispatch = useDispatch()
  const { jobsData, totalCount, totalItems, status,filter } = useSelector(state => state.jobs)


  const handleOpen = (id) => {
    setOpen(!open)
    dispatch(fetchJob(id)).then((data) => setJob(data.payload))
  };

  const loadMoreJobs = () => {
    dispatch(setTotalCount())

  }

  const filtersParams = filter?.map((item) => {
    const entries = Object.entries(item)
    const q = entries.map((i) => i.join('='))
    return  `&${q}`
  }) 

  useEffect(() => {
    dispatch(fetchJobs({totalCount, filtersParams}))

  }, [totalCount,filter])


  return (
    <>

      <SearchBar />
      <TopCandidats />

      {jobsData.map((item) => <CardJob {...item} openPop={handleOpen} />)}

      {totalItems == jobsData.length || <BtnLoader onClick={loadMoreJobs} loading={status}>Load More</BtnLoader>}

      <DetailsPopUp open={open} handleOpen={handleOpen} {...job}/>
    </>
  )
}
