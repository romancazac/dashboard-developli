import React from 'react'
import ButtonIcon from '../ui/ButtonIcon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeleteItem,  setForUdateData } from '../../redux/slices/profileSlice'
import { setPopUp } from '../../redux/slices/jobsSlice'
import { fetchProfileInfo } from '../../redux/slices/authSlice'



export const ProfileItemIcon = ({ icon, name, position, term, employment, id, idItem, editArray, aside }) => {
   const dispatch = useDispatch()

   const { popUp } = useSelector(state => state.jobs)
   const { forUpdateData } = useSelector(state => state.profile)


   const dataForUpdate = () => {
      dispatch(setForUdateData([id, { "redact": true }, { "name": name, "agency": position, "employment": employment, "perioad": term,  "id":idItem}]))

   }
   const onDelete = () => {
      if (!Boolean(popUp)) {
         dataForUpdate()
         dispatch(setPopUp(editArray))

      }
      dispatch(fetchDeleteItem({ section: popUp, id: forUpdateData[0], itemId: id }))
      dispatch(fetchProfileInfo())
      
      
   }


   const onEditeItem = () => {
      if (!Boolean(popUp)) {
       dispatch(setPopUp(editArray))
      }

      dataForUpdate()

   }
   return (
      <div className="flex gap-3 mb-3">

         <ButtonIcon
            icon={false}
            className="w-[54px] h-[54px] flex-[0_0_54px] bg-[#F15A25] text-white"
         >{icon}</ButtonIcon>
         <div className='flex-auto'>
            <h4 className="font-bold mb-1">{name}</h4>
            <span className="block font-bold text-gray text-xs mb-1">{position} - {employment}</span>
            <span className="block font-bold  text-gray text-xs mb-1">{term}</span>
         </div>
         {
            !aside &&
            <div className="flex items-center gap-5 ">
               <button className="icon-pencil hover:text-green ease-in-out duration-300" onClick={onEditeItem}></button>
               <button className="icon-bin2 text-[#E60019] hover:text-green ease-in-out duration-300" onClick={onDelete}></button>
            </div>
         }

      </div>
   )
}
