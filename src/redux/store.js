import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
import auth from './slices/authSlice'
export default configureStore({
  reducer: {
   jobs,
   auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})