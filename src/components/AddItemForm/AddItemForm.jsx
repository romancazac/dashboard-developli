import React, { useState } from 'react'
import InputIcon from '../ui/InputIcon'
import { BriefcaseIcon, BuildingOffice2Icon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostItem, fetchProfileInfo, fetchUpdateItem } from '../../redux/slices/profileSlice';
import uuid from 'react-uuid';



export const AddItemForm = ({ name }) => {
   const disptach = useDispatch();
   const [perioad, setPerioad] = useState({ from: '', to: '' });
   const { popUp } = useSelector(state => state.jobs)
   const { forUpdateData } = useSelector(state => state.profile)


   const CreateSchema = Yup.object().shape({
      position: Yup.string()
         .min(2, 'Too Short!')
         .required('Required'),
      employment: Yup.string()
         .min(2, 'Too Short!')
         .required('Required'),

   });
  
   const onAddItems = async (values, actions) => {

      if (forUpdateData[1].redact) {
         const id = forUpdateData[2].id
         const updates = { ...values, perioad: perioad.to + '--' + perioad.from, id }
         await disptach(fetchUpdateItem({ updates, section: popUp, id: forUpdateData[0], objId: forUpdateData[2].id }))
         disptach(fetchProfileInfo())
         actions.resetForm()

      } else {
         const updates = { ...values, perioad: perioad.to + '--' + perioad.from, id: uuid() }
         await disptach(fetchPostItem({ updates, section: popUp, id: forUpdateData[0] }))
         disptach(fetchProfileInfo())
         actions.resetForm()
      }


   }
   return (

      <Formik
         initialValues={{

            position: `${forUpdateData[1]?.redact ? forUpdateData[2]?.name : ''}`,
            employment: `${forUpdateData[1]?.redact ? forUpdateData[2]?.employment : ''}`,
            agency: `${forUpdateData[1]?.redact ? forUpdateData[2]?.agency : ''}`,
            location: `${forUpdateData[1]?.redact ? forUpdateData[2]?.name : ''}`,

         }}
         validationSchema={CreateSchema}
         onSubmit={onAddItems}
      >
         {({ values, handleChange, touched, errors }) => (
            <Form>
               <h4 className='text-lg text-blackColor font-bold mb-7'>Personal Information</h4>

               <div className="flex-1 mb-7">
                  <span className='text-blackColor font-bold inline-block mb-3'>Work Title
                     <span className='text-[#E60019] text-xs'> * {errors.position && touched.position && errors.position}</span>

                  </span>
                  <InputIcon placeholder={name}
                     value={values.position}
                     onChange={handleChange}
                     name='position'
                     className={'bg-[#F6F8F9]'}
                     icon={<BriefcaseIcon className='w-6 text-green ' />} />
               </div>
               <div className="flex-1 mb-7">
                  <span className='text-blackColor font-bold inline-block mb-3'>Employment Type
                     <span className='text-[#E60019] text-xs'> * {errors.employment && touched.employment && errors.employment}</span>
                  </span>
                  <InputIcon placeholder='Fulltime or Freelance'
                     value={values.employment}
                     onChange={handleChange}
                     name='employment'
                     icon={<BriefcaseIcon className='w-6 text-green' />} />
               </div>
               <div className="flex-1 mb-7">
                  <span className='text-blackColor font-bold inline-block mb-3'>Company Name<span className='text-[#E60019]'>*</span></span>
                  <InputIcon
                     placeholder={name}
                     value={values.agency}
                     onChange={handleChange}
                     name='agency'
                     icon={<BuildingOffice2Icon className='w-6 text-green' />} />
               </div>
               <div className="flex-1 mb-7">
                  <span className='text-blackColor font-bold inline-block mb-3'>Location<span className='text-[#E60019]'>*</span></span>
                  <InputIcon
                     placeholder={name}
                     value={values.location}
                     onChange={handleChange}
                     name='location'
                     icon={<MapPinIcon className='w-6 text-green' />} />

               </div>
               <div className="flex gap-6">
                  <div className="flex-1 mb-7">
                     <span className='text-blackColor font-bold inline-block mb-3'>Start Date</span>
                     <InputIcon
                        type='date'
                        placeholder={name}
                        value={perioad.from}
                        onChange={(e) => setPerioad({ ...perioad, from: e.target.value })}
                        name='perioad'
                        icon={<CalendarDaysIcon className='w-6 text-green' />} />

                  </div>
                  <div className="flex-1 mb-7">
                     <span className='text-blackColor font-bold inline-block mb-3'>End Date</span>
                     <InputIcon type='date'
                        placeholder={name}
                        value={perioad.to}
                        onChange={(e) => setPerioad({ ...perioad, to: e.target.value })}
                        name='perioad'
                        icon={<CalendarDaysIcon className='w-6 text-green' />} />

                  </div>

               </div>




               <div className="flex justify-end gap-4 mt-3">
                  <button onClick={() => console.log('')} className="btn-block btn-block_gray">Discard</button>
                  <button type='submit' className="btn-block btn-block_green">Save Changes</button>
               </div>
            </Form>
         )}
      </Formik>
   )
}
