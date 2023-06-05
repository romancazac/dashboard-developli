import { configureStore } from '@reduxjs/toolkit'
import jobs from './slices/jobsSlice'
export default configureStore({
  reducer: {
   jobs
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})