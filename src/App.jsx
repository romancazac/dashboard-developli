import { useEffect } from "react"
import { routes } from "./routes"
import { RouterProvider } from "react-router-dom"
import { fetchProfileInfo } from "./redux/slices/profileSlice"
import { useDispatch, useSelector } from "react-redux"
import { setPopUp, setSavedJobsFromLs } from "./redux/slices/jobsSlice"
import UpdatePopupAdd from "./components/UpdatePopupAdd/UpdatePopupAdd"
import UpdatePopup from "./components/UpdatePopup/UpdatePopup"
import { Alert } from './components/Alert/Alert';
import DetailsPopUp from "./components/DetailsPopUp/DetailsPopUp"
import TestPopUp from "./components/TestPopUp/TestPopUp"

function App() {
  const dispatch = useDispatch()
  const { popUp } = useSelector(state => state.jobs)

  const getSavedFromLs = () => {
    const data = localStorage.getItem('saved')
    dispatch(setSavedJobsFromLs(JSON.parse(data)))
  }

  useEffect(() => {
    dispatch(fetchProfileInfo())
    getSavedFromLs()
  }, [])
  return (
    <>
      <RouterProvider router={routes} />
      {(popUp === 'experience' || popUp === 'education' || popUp === 'languages') && <UpdatePopupAdd open={popUp === 'experience' || popUp === 'education' || popUp === 'languages'} handleOpen={() => dispatch(setPopUp(''))} />}
      {
        (popUp === 'personalInfo' || popUp === 'contacts' || popUp === 'skilss') && <UpdatePopup open={popUp === 'personalInfo' || popUp === 'contacts' || popUp === 'skilss'} handleOpen={() => dispatch(setPopUp(''))} />
      }
      <Alert />
      <DetailsPopUp open={popUp === 'information'} handleOpen={() => dispatch(setPopUp(''))} className='overflow-auto' />
      <TestPopUp open={popUp === 'test'} handleOpen={() => dispatch(setPopUp(''))} />
      
    </>
  )
}

export default App
