import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchSingIn, setOpenPop, setRegistration, logout } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export const LogIn= () => {
   const dispatch = useDispatch();
   const history = useNavigate()
   const { error, token, user } = useSelector(state => state.auth);
   // const { countWish } = useSelector(state => state.wish)

   const SignupSchema = Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string()
         .min(5, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
   });

   const handleLog =(values) => {

      dispatch(fetchSingIn(values));
        dispatch(setOpenPop(false));
     
      
   }
   useEffect(() => {
      if(user) {
         history('/dashboard')
      }
   },[user])
   const handleOut = () => {
      window.localStorage.removeItem('token')
      dispatch(logout())
   }

   const renderForm = () => {
      return (
         <Form className='w-full'>
            <div className='mb-5 '>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Email Address</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <Field className='bg-transparent text-gray w-full outline-0' type="text" name="username" placeholder='Enter your email' />

               </div>
               <ErrorMessage name="username" />
            </div>
            <div className='mb-5'>
               <label className='text-blackColor font-bold mb-1 block text-sm'>Password</label>
               <div className='flex gap-3 text-green p-3 bg-[#F6F8F9] rounded-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                  <Field className='bg-transparent text-gray w-full outline-0' type="password" name="password" placeholder='Enter your password' />

               </div>
               <ErrorMessage name="password" />
            </div>
            {error && <span className='text-center block mb-1'>No user or incorect password/email</span>}
            <div className="flex justify-between gap-4">
               <button type='submit' className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Login</button>
               <p className="text-xs font-medium mt-3">Not registered yet? &nbsp;
                  <Link to='registration' className="text-green">Create an account</Link></p>
            </div>
         </Form>
      )
   }
   useEffect(() => {
      token && window.localStorage.setItem('token', token);
   }, [token])
   return (
      <Formik
         initialValues={{ username: '', password: '' }}
         validationSchema={SignupSchema}
         onSubmit={handleLog}
      >
         {
            !user ?
               renderForm()
               :
               <div>
                  <p> Hello {user.username}</p>
                  <p>Your phone {user.phone}</p>
                  <p>Your email {user.email}</p>
                  {/* <p>Added in wish {countWish} jobs</p> */}
                  <button onClick={handleOut} className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl mt-3 hover:scale-105 ease-in-out duration-75 text-base'>Logout</button>
               </div>

         }

      </Formik>


   )
}
