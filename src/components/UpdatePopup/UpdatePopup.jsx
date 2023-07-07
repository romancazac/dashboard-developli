import { Fragment, useEffect, useState } from "react";
import {
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
   Spinner,

} from "@material-tailwind/react";
import ButtonIcon from "../ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddItem } from "../../redux/slices/profileSlice";
import { fetchProfileInfo } from "../../redux/slices/authSlice";


export default function UpdatePopup({ open, handleOpen }) {

   const disptach = useDispatch();
   const { popUp } = useSelector(state => state.jobs)
   const { forUpdateData, status } = useSelector(state => state.profile)


   const [updates, setUpdates] = useState({});


   useEffect(() => {
      setUpdates(forUpdateData[1] ? forUpdateData[1] : {})
   }, [forUpdateData[1]])

   const onUpdates = async () => {
      await disptach(fetchAddItem({ updates, section: popUp, id: forUpdateData[0] }))
      disptach(fetchProfileInfo())
   }

   const renderArr = (arr, label) => {
      return (
         <div className="w-full">
            {arr?.map((t, i) => (
               <div className="flex gap-2 items-center mb-4 group" key={i}>
                  <span className={`${t.icon} text-green w-3`}></span>

                  <p className="text-gray group-hover:text-green group-hover:underline">
                     {t.name}
                  </p>
                  <input
                     value={updates[label][i].url}
                     onChange={(e) =>
                        setUpdates({
                           ...updates,
                           [label]: updates[label].map((item, index) =>
                              index === i ? { ...item, url: e.target.value } : item
                           ),
                        })
                     }
                     className="text-blackColor w-full outline-[green]"
                  />
               </div>
            ))}
         </div>
      );
   };
   return (
      <Fragment >
         <Dialog size="xl" open={open} handler={handleOpen} className="max-w-[700px!important] min-w-[auto]  overflow-auto md:max-h-[99%]  md:min-w-[90%] p-5">
            <DialogHeader className="flex items-start justify-between gap-1 p-0 mb-3">
               <ButtonIcon className={"w-8 h-8 ml-auto"} onClick={handleOpen}><XMarkIcon className="w-4" /></ButtonIcon>
            </DialogHeader>
            <DialogBody className="overflow-y-auto p-0 ">
               {
                  Object.entries(updates).map(([label, text]) =>
                     <div className='flex md:flex-wrap mb-5 last:mb-0'>
                        {
                           label !== "id" &&
                           <span className='block text-gray max-w-[150px] w-full first-letter:uppercase'>{label}</span>
                        }

                        {
                           label !== "id" && (label === "about" ?
                              <textarea
                                 value={updates[label]}
                                 onChange={(e) => setUpdates({ ...updates, [label]: e.target.value })} placeholder={text} className="w-full border px-1" /> :
                              typeof text === 'object' ?
                                 renderArr(text, label)
                                 :
                                 <input
                                    value={updates[label]}
                                    onChange={(e) => setUpdates({ ...updates, [label]: e.target.value })} className='text-blackColor w-full outline-[green] border px-1' />)
                        }
                     </div>
                  )
               }
            </DialogBody>


            <DialogFooter className="justify-start">
               <button onClick={onUpdates} className='flex gap-2 btn-block btn-block_green'>
                  Update
                  {status === "loading" ? <Spinner className='w-4 h-4 text-white' /> : ''}
                  
               </button>

            </DialogFooter>




         </Dialog>

      </Fragment>
   );
}