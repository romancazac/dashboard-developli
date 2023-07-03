import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
import auth from './slices/authSlice'
import profile from './slices/profileSlice'
import accordion from './slices/accordionSlice'
import alerts from './slices/alertsSlice'
import ui from './slices/uiSlice'

export default configureStore({
  reducer: {
   jobs,
   auth,
   profile,
   accordion,
   alerts,
   ui
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})