import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { useEffect } from "react"
import { fetchProfileInfo } from "./redux/slices/profileSlice"
import { useDispatch } from "react-redux"


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfileInfo())
    
  },[])
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
