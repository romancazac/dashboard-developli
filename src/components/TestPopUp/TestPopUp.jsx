import { Fragment, useState } from "react";


import {

   Typography,
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
} from "@material-tailwind/react";
import ButtonIcon from "../ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ApplyForm } from "../ApplyForm/ApplyForm";

export default function TestPopUp({ open, handleOpen,date, name, author, avatar, country, experience, level, requirements, salary, text, types }) {
   const [apply, setApply] = useState(false);

   return (
      <Fragment >
        

     
         <Dialog size="xl" open={open} handler={handleOpen} className="max-w-[900px!important] min-w-[auto] h-[99%] overflow-auto  md:min-w-[90%] p-5">
            <DialogHeader className="flex items-start justify-between gap-1 p-0 mb-3">
               {
                  apply ?
                     <h4 className="font-bold text-[22px] mb-4">Apply</h4>
                     :

                     <span className="block w-[90px] h-[90px] rounded-full bg-[#F5F7FF]">
                        <img src={avatar} alt='avatar' className="w-full h-full object-cover" />
                     </span>

               }

               <ButtonIcon className={"w-8 h-8"} onClick={handleOpen}><XMarkIcon className="w-4" /></ButtonIcon>
            </DialogHeader>
            <DialogBody className="overflow-y-auto p-0 md:h-96">
               {
                  !apply &&

                  <div className="flex items-center gap-5 mb-[15px]">
                     <span className='relative text-[#1F8FFF]  flex items-center modal__after'>{author}</span>
                     <span className='relative gap-[8px] flex items-center modal__after'>
                        <span className='icon-location2'></span>
                        {country}
                     </span>
                     <span className='gap-[8px] flex items-center '>
                        Posted {date}
                     </span>
                  </div>
               }

               <div className="flex px-5 py-6 border border-[#F3F3F3] rounded-2xl gap-5 mb-10 md:overflow-x-auto">
                  <div className="relative w-1/4 flex-shrink-0 w-[115px] after__line">
                     <span className="block mb-[5px]">Experience</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {experience}
                     </span>

                  </div>
                  <div className="relative w-1/4  flex-shrink-0 w-[130px] after__line">
                     <span className="block mb-[5px]">Work Level</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {level}
                     </span>

                  </div>
                  <div className="relative w-1/4  flex-shrink-0 w-[130px] after__line">
                     <span className="block mb-[5px]">Employee Type</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                        {types?.split(',')[0]}
                     </span>

                  </div>
                  <div className="relative w-1/4 flex-shrink-0 w-[130px]  ">
                     <span className="block mb-[5px]">Offer Salary</span>
                     <span className="flex items-center gap-2  text-sm font-semibold text-[#1B2124]">
                        <span className='icon-coin-dollar text-[18px]'></span>
                        ${salary} / Month
                     </span>

                  </div>
               </div>
               <div className="mb-12">
                  <h5 className="text-[#1B2124] text-lg font-bold mb-4 ">Job Description</h5>
                  <p className="">{text}</p>
               </div>
               {
                  apply ?
                     <ApplyForm name={name} setApply={setApply}/>
                     :
                     <div className="mb-10">
                        <h5 className="text-[#1B2124] text-lg font-bold mb-4 ">Requirements</h5>
                        <ul>
                           {requirements?.map((r, i) =>
                              <li key={i} className="relative before__circle mb-3">{r}</li>
                           )}
                        </ul>
                     </div>
               }


            </DialogBody>
            {
               !apply &&

               <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
                  <Typography className="font-semibold text-[#1B2124]">
                     Are you interested in this Job?
                  </Typography>
                  <div className="flex gap-4">
                     <button onClick={() => setApply(true)} className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'><span className='icon-file-text2'></span> Apply Now</button>
                  </div>
               </DialogFooter>
            }

         </Dialog>
        
      </Fragment>
   );
}