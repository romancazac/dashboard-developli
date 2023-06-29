import { useEffect } from "react"
import { routes } from "./routes"
import { RouterProvider } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { fetchJobs, setPopUp, setSavedJobsFromLs } from "./redux/slices/jobsSlice"
import UpdatePopupAdd from "./components/UpdatePopupAdd/UpdatePopupAdd"
import UpdatePopup from "./components/UpdatePopup/UpdatePopup"
import { Alert } from './components/Alert/Alert';
import DetailsPopUp from "./components/DetailsPopUp/DetailsPopUp"
import TestPopUp from "./components/TestPopUp/TestPopUp"
import { fetchAuthMe } from "./redux/slices/authSlice"

function App() {
  const dispatch = useDispatch()
  const { totalCount, popUp, filter, sort, jobSearch } = useSelector(state => state.jobs);
  const { user } = useSelector(state => state.auth)

  // for saved job
  const getSavedFromLs = () => {
    const data = localStorage.getItem('saved')
    dispatch(setSavedJobsFromLs(JSON.parse(data)))
  }
  // filters params
  const filtersParams = filter?.map((item) => {
    const entries = Object.entries(item)
    const params = entries.map((i) => i.join('='))
    return `&${params}`
  })


  // search params

  const searchQ = (jobSearch.country && jobSearch.country !== '' ? `&country=${jobSearch.country}` : '') +
    (jobSearch.name && jobSearch.name !== '' ? `&name=*${jobSearch.name}*` : '');


  useEffect(() => {
    dispatch(fetchJobs({ totalCount, filtersParams, sort, searchQ }))
  }, [totalCount, filter, sort, jobSearch])


  useEffect(() => {

    getSavedFromLs()
  }, [])
  useEffect(() => {
    if (!user) {
      const token = window.localStorage.getItem('token')
      dispatch(fetchAuthMe(token))


    }
  }, [])




  return (
    <>
      <RouterProvider router={routes} />
      {(popUp === 'experience' || popUp === 'education' || popUp === 'languages') && <UpdatePopupAdd open={popUp === 'experience' || popUp === 'education' || popUp === 'languages'} handleOpen={() => dispatch(setPopUp(''))} />}
      {
        (popUp === 'personalInfo' || popUp === 'contacts' || popUp === 'skilss' || popUp === 'preference') && <UpdatePopup open={popUp === 'personalInfo' || popUp === 'contacts' || popUp === 'skilss' || popUp === 'preference'} handleOpen={() => dispatch(setPopUp(''))} />
      }
      <Alert />
      <DetailsPopUp open={popUp === 'information'} handleOpen={() => dispatch(setPopUp(''))} className='overflow-auto' />
      <TestPopUp open={popUp === 'test'} handleOpen={() => dispatch(setPopUp(''))} />

    </>
  )
}

export default App
