import {createBrowserRouter} from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { JobLayout } from "./layouts/JobLayout"
import { Dashboard } from "./pages/Dashboard"

import { Recommended } from "./pages/Job/Recommended"
import { MyApplication } from "./pages/Job/MyApplication"
import { Saved } from "./pages/Job/Saved"
import { Preferenced } from "./pages/Job/Preferenced"

export const routes = createBrowserRouter([
   {
      path:"/",
      element:<MainLayout/>,
      children:[
         {
            path:"dashboard",
            element:<Dashboard/>
         }
      ]
   },
   {
      path:"/",
      element:<JobLayout/>,
      children:[
    
         {
            path:"recommended",
            element:<Recommended/>
         },
         {
            path:"my-application",
            element:<MyApplication/>
         },
         {
            path:"saved",
            element:<Saved/>
         },
         {
            path:"preferenced",
            element:<Preferenced/>
         }
      ]
   },




])