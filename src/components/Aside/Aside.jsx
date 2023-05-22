import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {

  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from '../../assets/img/logo.png'
import { NavLink } from "react-router-dom";

export const Aside = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


   return (
    <Card className="fixed top-0 left-0 h-full w-full max-w-[260px] p-4  rounded-none shadow-none ">
      <a href="/" className="mb-10 p-4">
        <img src={logo} alt="" />
      </a>
      <List>

        <NavLink to='dashboard'
          className="flex 
          items-center gap-3 px-5 py-3 rounded-xl 
        [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
        >
          <span className="icon-dashboard" ></span>
          Dashboard
        </NavLink>


        <button>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto ml-auto h-3 w-3 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
          >
            <span className="p-0 hover:text-white">
              <AccordionHeader onClick={() => handleOpen(2)}
                className={`px-5 py-3 rounded-xl border-0 text-base ${open === 2 ? 'text-white bg-green' : ''}`}>

                <span className="flex items-center gap-3 icon-job " > Job </span>


              </AccordionHeader>
            </span>
            <AccordionBody className="flex flex-col gap-3 items-start pl-[49px]">

              <NavLink to='recommended' className='font-medium [&.active]:text-blueColor'>
                Recommended
              </NavLink>
              <NavLink to='my-application' className='font-medium [&.active]:text-blueColor'>
                My Application
              </NavLink>
              <NavLink to='Saved' className='font-medium [&.active]:text-blueColor'>
                Saved
              </NavLink>
              <NavLink to='preferenced' className='font-medium [&.active]:text-blueColor'>
                Preferences
              </NavLink>
            </AccordionBody>
          </Accordion>
        </button>
        <NavLink to='messages'
          className="flex 
          items-center gap-3 px-5 py-3 rounded-xl 
        [&.active]:text-green [&.active]:bg-green [&.active]:text-white"
        >
          <div className="flex items-center gap-3 flex-auto">
            <span className="icon-mess" ></span>
            Messages
          </div>
          <span className="bg-[rgba(71,209,140,0.05)] rounded-[10px] text-xs text-green py-1 px-[10px]">84</span>

        </NavLink>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

