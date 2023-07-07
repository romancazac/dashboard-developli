import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
import auth from './slices/authSlice'
import profile from './slices/profileSlice'
import accordion from './slices/accordionSlice'
import alerts from './slices/alertsSlice'
import ui from './slices/uiSlice'
import chat from './slices/chatSlice'

export default configureStore({
  reducer: {
   jobs,
   auth,
   profile,
   accordion,
   alerts,
   ui,
   chat
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})