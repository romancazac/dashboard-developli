import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
import auth from './slices/authSlice'
import profile from './slices/profileSlice'
import accordion from './slices/accordionSlice'
import alerts from './slices/alertsSlice'

export default configureStore({
  reducer: {
   jobs,
   auth,
   profile,
   accordion,
   alerts
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})