import {createBrowserRouter} from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { JobLayout } from "./layouts/JobLayout"
import { Dashboard } from "./pages/Dashboard"
import { MyApplication } from "./pages/Job/MyApplication"
import { Saved } from "./pages/Job/Saved"
import { SearchJob } from "./pages/Job/SearchJob"
import { Messages } from "./pages/Messages"
import { FullPageLayout } from "./layouts/FullPageLayout"

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
            path:"search-job",
            element:<SearchJob/>
         },
         {
            path:"my-application",
            element:<MyApplication/>
         },
         {
            path:"saved",
            element:<Saved/>
         }
      ]
   },
   {
      path:"/",
      element:<FullPageLayout/>,
      children:[
         {
            path:"messages",
            element:<Messages/>
         }
       
      ]
   },




])