import React from 'react'
import InputIcon from '../ui/InputIcon'
import { BriefcaseIcon, GlobeAltIcon, UserIcon } from '@heroicons/react/20/solid'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
export const ApplyForm = ({ name, setApply }) => {
   const SignupSchema = Yup.object().shape({
      firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
      lastName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
   });

   return (
      <>

         <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
               // same shape as initial values
               console.log(values);
            }}
         >
            {({ errors, touched }) => (
               <Form>
                  <h4 className='text-lg text-blackColor font-bold mb-7'>Personal Information</h4>
                  <div className="flex gap-6 mb-7">
                     <div className="flex-1">
                        <span className='text-blackColor font-bold inline-block mb-3'>First name</span>
                        <InputIcon placeholder='First name' name='name' icon={<UserIcon className='w-6 text-green' />} />
                     </div>
                     <div className="flex-1">
                        <span className='text-blackColor font-bold inline-block mb-3'>Last name</span>
                        <InputIcon placeholder='Last name' name='lastname' icon={<UserIcon className='w-6 text-green' />} />
                     </div>
                  </div>
                  <div className="flex-1 mb-7">
                     <span className='text-blackColor font-bold inline-block mb-3'>Work position <span className='text-[#E60019]'>*</span></span>
                     <InputIcon placeholder={name} value={name} name='name' icon={<BriefcaseIcon className='w-6 text-green' />} />
                  </div>
                  <div className="flex-1">
                     <span className='text-blackColor font-bold inline-block mb-3'>Portfolio<span className='text-[#E60019]'>*</span></span>
                     <InputIcon placeholder='Link' name='link' icon={<GlobeAltIcon className='w-6 text-green' />} />
                  </div>
                  <div className="flex justify-end gap-4 mt-3">
                     <button onClick={() => setApply(false)} className="btn-block btn-block_gray">Cancel</button>
                     <button className="btn-block btn-block_green">Submit</button>
                  </div>
               </Form>
            )}

         </Formik>
      </>
   )
}
