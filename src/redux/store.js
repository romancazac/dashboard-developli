import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
import auth from './slices/authSlice'
import profile from './slices/profileSlice'
export default configureStore({
  reducer: {
   jobs,
   auth,
   profile
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})