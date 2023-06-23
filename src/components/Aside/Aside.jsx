import { useState } from "react";
import { Card, List, Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import { UserCircleIcon, Cog6ToothIcon, } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/img/logo.png'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccordion } from "../../redux/slices/accordionSlice";
import { logout } from "../../redux/slices/authSlice";


export const Aside = () => {
  const dispatch = useDispatch()
  const { accordion } = useSelector(state => state.accordion)
  
 

  return (
    <Card className="fixed top-0 left-0 h-full w-full max-w-[260px] overflow-y-auto overflow-x-hidden  p-4  rounded-none shadow-none  ">
      <a href="/" className="mb-10 p-4">
        <img src={logo} alt="" />
      </a>
      <List className="flex-auto">

        <NavLink
          to='dashboard'
          className="flex items-center gap-3 px-5 py-3 rounded-xl [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
          onClick={() => dispatch(setAccordion(0))}
        >

          <span className="icon-dashboard" ></span>
          Dashboard
        </NavLink>

        <Accordion
          open={accordion === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto ml-auto h-3 w-3 transition-transform ${accordion === 1 ? "rotate-180" : ""}`}
            />
          }
        >

          <AccordionHeader onClick={() => dispatch(setAccordion(1))}
            className={`px-5 py-3 rounded-xl border-0 text-base ${accordion === 1 ? 'text-white bg-green' : ''}`}>

            <span className="flex items-center gap-3 font-medium" >
              <span className="icon-job"></span>
              Job
            </span>
          </AccordionHeader>

          <AccordionBody  className="flex flex-col gap-3 items-start pl-[49px]">

            <NavLink to='search-job' className='font-medium [&.active]:text-blueColor'>
              Search Job
            </NavLink>
            <NavLink to='Saved' className='font-medium [&.active]:text-blueColor'>
              Job Saved
            </NavLink>
            <NavLink to='my-application' className='font-medium [&.active]:text-blueColor'>
              My Application
            </NavLink>
          </AccordionBody>
        </Accordion>

        <NavLink
          to='messages'
          className="flex items-center gap-3 px-5 py-3 rounded-xl [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
          onClick={() => dispatch(setAccordion(0))}
        >
          <div className="flex items-center gap-3 flex-auto">
            <span className="icon-mess" ></span>
            Messages
          </div>
          <span className="bg-[rgba(71,209,140,0.05)] rounded-[10px] text-xs text-green py-1 px-[10px]">84</span>

        </NavLink>
        <Accordion
          open={accordion === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto ml-auto h-3 w-3 transition-transform ${accordion === 2 ? "rotate-180" : ""}`}
            />
          }
        >

          <AccordionHeader onClick={() => dispatch(setAccordion(2))}
            className={`px-5 py-3 rounded-xl border-0 text-base  ${accordion === 2 ? 'text-white bg-green' : ''}`}>
            <span className="flex items-center gap-3  font-medium" >
              <UserCircleIcon className="h-4 w-4" />
              My Profile

            </span>



          </AccordionHeader>

          <AccordionBody className="flex flex-col gap-3 items-start pl-[49px]">

            <NavLink to='resume' className='font-medium [&.active]:text-blueColor'>
              My resume
            </NavLink>
            <NavLink to='settings' className='font-medium [&.active]:text-blueColor'>
              Settings
            </NavLink>

          </AccordionBody>
        </Accordion>
        <NavLink to='my-interviews'
          className="flex 
          items-center gap-3 px-5 py-3 rounded-xl 
        [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
          onClick={() => dispatch(setAccordion(0))}
        >
          <span className="icon-calendar" ></span>
          My interviews

        </NavLink>
        <NavLink to='company'
          className="flex 
          items-center gap-3 px-5 py-3 rounded-xl 
        [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
          onClick={() => dispatch(setAccordion(0))}
        >
          <div className="flex items-center gap-3 flex-auto">
            <Cog6ToothIcon className="h-4 w-4 text-base" />
            Company
          </div>


        </NavLink>
        <NavLink to='help'
          className="flex 
          items-center gap-3 px-5 py-3 rounded-xl 
        [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
          onClick={() => dispatch(setAccordion(0))}
        >
          <div className="flex items-center gap-3 flex-auto">
            <span className="icon-question" />
            Help Center
          </div>


        </NavLink>
      </List>

      <button className="flex items-center gap-3 px-5 py-3 rounded-xl text-[#F05817] font-medium  hover:text-green" >
        <button onClick={() => dispatch(logout())} className="flex items-center gap-3 flex-auto">
          <span className="icon-logout" />
          Logout
        </button>
      </button>
    </Card>
  );
}

