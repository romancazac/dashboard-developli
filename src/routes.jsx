import {createBrowserRouter} from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { JobLayout } from "./layouts/JobLayout"
import { Dashboard } from "./pages/Dashboard"
import { MyApplication } from "./pages/Job/MyApplication"
import { Saved } from "./pages/Job/Saved"
import { SearchJob } from "./pages/Job/SearchJob"
import { Messages } from "./pages/Messages"
import { FullPageLayout } from "./layouts/FullPageLayout"
import { Resume } from "./pages/Profile/Resume"
import { Settings } from "./pages/Profile/Settings"
import { ProfileLayout } from "./layouts/ProfileLayout"
import { Auth } from "./pages/Auth/Auth"
import { Registration } from "./pages/Auth/Registration"
import { LogIn } from "./pages/Auth/LogIn"

export const routes = createBrowserRouter([
   {
      path:"/",
      element:<Auth/>,
      children:[
         {
            path:"auth",
            element:<LogIn/>
         },
         {
            path:"registration",
            element:<Registration/>
         }
      ]
   },
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
   {

      path:"/",
      element:<ProfileLayout/>,
      children:[
         {
            path:"resume",
            element:<Resume/>
         },
         {
            path:"settings",
            element:<Settings/>
         }
      ]
   }




])