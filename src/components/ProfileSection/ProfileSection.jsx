import React from 'react'
import ButtonIcon from '../ui/ButtonIcon'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { setProfileInfo} from '../../redux/slices/profileSlice'
import {  fetchAddItem } from '../../redux/slices/profileSlice'

export const ProfileSection = ({ title, children, NoRedact,addItem, editArray }) => {
   const dispatch = useDispatch()
   const onEdit = () => {
      // console.log(editArray)
      // console.log(dispatch(setProfileInfo(editArray)))
      dispatch(fetchAddItem('param'))
   }
   return (
      <div className="mb-[23px] p-6 rounded-xl bg-white">
         <div className="flex justify-between items-center gab-1 mb-7">
            <span className='text-blackColor font-bold text-lg'>{title}</span>
            {
               !NoRedact &&
               <ButtonIcon
                  icon={`${!addItem && "icon-pencil"}`}
                  className="w-[31px] h-[31px]"
                  onClick={onEdit}
               >
                  {
                    addItem &&  <PlusIcon className='w-4'/> 
                  }
                 
               </ButtonIcon>
            }


         </div>
         {children}
      </div>
   )
}
