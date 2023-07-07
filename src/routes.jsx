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
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute"
import { Interviews } from "./pages/Interviews"
import { Company } from "./pages/Company"
import { Help } from "./pages/Help"

export const routes = createBrowserRouter([
   {
      path:"/",
      element:<Auth/>,
      children:[
         {
            path:"/",
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
      element:<PrivateRoute><MainLayout/></PrivateRoute> ,
      children:[
         {
            path:"dashboard",
            element:<Dashboard/>
         }
         
      ]
   },
   {
      path:"/",
      element:<PrivateRoute><JobLayout/></PrivateRoute>,
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
      element:<PrivateRoute><FullPageLayout/></PrivateRoute>,
      children:[
         {
            path:"messages",
            element:<Messages/>
         },
         {
            path:"messages/:idn",
            element:<Messages/>
         }
       
      ]
   },
   {

      path:"/",
      element:<PrivateRoute><ProfileLayout/></PrivateRoute>,
      children:[
         {
            path:"resume",
            element:<Resume/>
         },
         {
            path:"settings",
            element:<Settings/>
         },
         {
            path:"interviews",
            element:<Interviews/>
         },
         {
            path:"company",
            element:<Company/>
         },
         {
            path:"help",
            element:<Help/>
         },
      ]
   }




])