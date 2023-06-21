import { Fragment, useEffect, useState } from "react";
import {
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
} from "@material-tailwind/react";
import ButtonIcon from "../ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Quiz } from "../Quiz/Quiz";
import { useAppServices } from "../../services/appServices";
import { useSelector } from "react-redux";

export default function TestPopUp({ open, handleOpen }) {
   const { getQuestions } = useAppServices()
   const [start, setStart] = useState(false);
   const [questions, setQuestions] = useState([]);
   const {singleJob} = useSelector(state => state.jobs);

   useEffect(() => {
      getQuestions().then((data) => setQuestions(data))
   }, [start])


   return (
      <Fragment >



         <Dialog size="xl" open={open} handler={handleOpen} className="max-w-[700px!important] min-w-[auto]  overflow-auto  md:min-w-[90%] p-5">
            <DialogHeader className="flex items-start justify-between gap-1 p-0 mb-3">
               {
                  !start && 
                  <span className="block w-[90px] h-[90px] rounded-full bg-[#F5F7FF]">
                     <img src={singleJob.avatar} alt='avatar' className="w-full h-full object-cover" />
                  </span>
               }

               <ButtonIcon className={"w-8 h-8 ml-auto"} onClick={handleOpen}><XMarkIcon className="w-4" /></ButtonIcon>
            </DialogHeader>
            <DialogBody className="overflow-y-auto p-0 md:h-96">

               {
                  start ? <Quiz questions={questions} />
                     :
                     <>
                        <h4 className="text-blackColor font-bold text-[22px] ">{singleJob.name} Test</h4>
                        <span className="">Test your {singleJob.name} knowledge</span>

                        <div className="mb-10 mt-11">
                           <h5 className="text-[#1B2124] text-lg font-bold mb-4 ">Requirements</h5>
                           <ul>

                              <li className="relative before__circle mb-3">There are 10 questions</li>
                              <li className="relative before__circle mb-3">You need to pick 1 answer</li>
                              <li className="relative before__circle mb-3">You have 10 sec for each question</li>
                              <li className="relative before__circle mb-3">It takes no longer than 6 mins to complete</li>

                           </ul>
                        </div>

                     </>
               }



            </DialogBody>

            {
               !start &&
               <DialogFooter className="justify-start">
                  <button onClick={() => setStart(true)} className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'><span className='icon-file-text2'></span>I am ready - get started</button>

               </DialogFooter>

            }


         </Dialog>

      </Fragment>
   );
}