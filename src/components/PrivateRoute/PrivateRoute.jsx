import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
   const token = window.localStorage.getItem('token');

   if(!token) {
      return <Navigate to={'/'}/>
   }
  return (
    <>{children}</>
  )
}
