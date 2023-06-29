import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchSingIn, setOpenPop, setRegistration, logout } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export const LogIn = () => {
   const dispatch = useDispatch();
   const history = useNavigate()
   const { user, error } = useSelector(state => state.auth);


   const SignupSchema = Yup.object().shape({
      email: Yup.string().required('* Required'),
      password: Yup.string()
         .min(5, 'Too Short!')
         .max(50, 'Too Long!')
         .required('* Required'),
   });

   const handleLog = async (values) => {
      const data = await dispatch(fetchSingIn(values))
      if (!data.payload) {
         return alert('No Auth')
      }
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token);
         history('/dashboard')
      }


   }

  



   return (
      <Formik
         initialValues={{ email: '', password: '' }}
         validationSchema={SignupSchema}
         onSubmit={handleLog}
      >
         <Form className='w-full'>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 flex gap-1 text-sm'>Email Address

                  <ErrorMessage name="email" component={'span'} className='text-[#FE6E66] text-[10px]' />
               </label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="email" placeholder='Enter your email' />

               </div>

            </div>
            <div className='mb-5'>
               <label className='text-blackColor font-bold mb-1 flex gap-2 text-sm'>Password
                  <ErrorMessage name="password" component={'span'} className='text-[#FE6E66] text-[10px]' />
               </label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                  <Field className='bg-transparent text-gray w-full outline-0' type="password" name="password" placeholder='Enter your password' />

               </div>
            </div>
            {error && <span className='text-center block mb-1'>No user or incorect password/email</span>}
            <div className="flex justify-between gap-4">
               <button type='submit' className='btn-block btn-block_green'>Login</button>
               <p className="text-xs font-medium mt-3">Not registered yet? &nbsp;
                  <Link to='registration' className="text-green">Create an account</Link></p>
            </div>
         </Form>

      </Formik>


   )
}
