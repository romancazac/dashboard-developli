import { Fragment } from "react";
import {Dialog, DialogHeader,   DialogBody} from "@material-tailwind/react";
   
import ButtonIcon from "../ui/ButtonIcon";
import { AcademicCapIcon, XMarkIcon } from "@heroicons/react/20/solid";
import {  useSelector } from "react-redux";

import { ProfileItemIcon } from "../ProfileItemIcon/ProfileItemIcon";
import { AddItemForm } from "../AddItemForm/AddItemForm";


export default function UpdatePopupAdd({ open, handleOpen }) {


   const { forUpdateData } = useSelector(state => state.profile)
   const { user } = useSelector(state => state.auth)
   const { popUp } = useSelector(state => state.jobs)
   


   return (
      <Fragment >
         <Dialog size="xl" open={open} handler={handleOpen} className="max-w-[700px!important] min-w-[auto] max-h-[99%] overflow-auto  md:min-w-[90%] p-5">
            <DialogHeader className="flex items-start justify-between gap-1 p-0 mb-3">
               <h3 className="first-letter:uppercase">{popUp}</h3>
               <ButtonIcon className={"w-8 h-8 ml-auto"} onClick={handleOpen}><XMarkIcon className="w-4" /></ButtonIcon>
            </DialogHeader>
            <DialogBody className="overflow-y-auto p-0 md:h-96">
               <div className="border-b border-color-[#F3F3F3] mb-2">
                  {
                     !forUpdateData[1]?.redact &&
                     user?.profileData[forUpdateData[0]].data?.map((item) =>

                        <ProfileItemIcon
                           key={item.id}
                           icon={<AcademicCapIcon className='w-5' />}
                           name={item.position}
                           employment={item.employment}
                           position={item.agency}
                           term={item.perioad}
                           id={item.id}
                        />

                     )

                  }
               </div>
               <AddItemForm />

            </DialogBody>

         </Dialog>

      </Fragment>
   );
}