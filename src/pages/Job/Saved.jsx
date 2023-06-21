import React from 'react'
import CardJob from '../../components/CardJob/CardJob'
import { useSelector } from 'react-redux'
import { Spinner } from '@material-tailwind/react'

export const Saved = () => {
  const { savedJobs,status } = useSelector(state => state.jobs)
  return (
    <div className='flex flex-wrap'>
      {savedJobs.length === 0 ? (
        status === "loading" ? <Spinner className='mx-auto' /> : 'No Saved jobs'
      ) : (
        savedJobs.map((item) => <CardJob {...item} openPop={'handleOpen'} />)
      )}
  
    </div>
  )
}
