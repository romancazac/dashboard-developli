import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { useEffect } from "react"
import { fetchProfileInfo } from "./redux/slices/profileSlice"
import { useDispatch, useSelector } from "react-redux"
import { setPopUp } from "./redux/slices/jobsSlice"
import UpdatePopupAdd from "./components/UpdatePopupAdd/UpdatePopupAdd"


function App() {
  const dispatch = useDispatch()
  const {popUp} = useSelector(state => state.jobs)


  useEffect(() => {
    dispatch(fetchProfileInfo())

  }, [])
  return (
    <>
      <RouterProvider router={routes} />
      {(popUp === 'experience' || popUp === 'education' || popUp === 'languages') && <UpdatePopupAdd open={popUp === 'experience' || popUp === 'education' || popUp === 'languages'} handleOpen={() => dispatch(setPopUp(''))} />}
    </>
  )
}

export default App
