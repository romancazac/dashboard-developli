import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { isEquivalent } from "../../utils/isEquivalent";

// First, create the thunk
export const fetchJobs = createAsyncThunk(
   'jobs/fetchJobsStatus',
   async (params) => {
      const { totalCount, filtersParams } = params
      const response = await axios.get(`${BASE_URL}/jobs?_start=0&_end=${totalCount}${filtersParams.join('')}`)
      const totalItems = response.headers['x-total-count'];

      // return response.data

      return {
         jobs: response.data,
         totalItems
      }
   }
)

export const fetchJob = createAsyncThunk(
   'jobs/fetchJobStatus',
   async (id) => {
      const response = await axios.get(`${BASE_URL}/jobs/${id}`)
      return response.data
   }
)

const initialState = {
   jobsData: [],
   totalCount: 5,
   totalItems: '',
   // paginationPage:1,
   status: "loading",
   jobSearch: {},
   filter: []

}

export const jobsSlice = createSlice({
   name: 'jobs',

   initialState,
   reducers: {
      setTotalCount(state) {
         state.totalCount += 5
      },
      setSearchJob(state, action) {
         state.jobSearch = action.payload;
      },
      setSearchRes(state) {
         state.jobSearch = ''
      },
      setJobs(state, action) {
         console.log(action.payload)
         state.jobsData = action.payload
      },
      setFilters(state, action) {
         
         const existingIndex = state.filter.findIndex(item => isEquivalent(item, action.payload));

         if (existingIndex !== -1) {
            // Dacă elementul există în array, îl ștergeți
            state.filter = state.filter.filter(item => !isEquivalent(item, action.payload));
         } else {
            state.filter = [...state.filter, action.payload];
         }
      }

   },
   extraReducers: {
      [fetchJobs.pending]: (state) => {
         state.status = 'loading';
         state.totalItems = 0
         state.jobsData = [...state.jobsData];

      },
      [fetchJobs.fulfilled]: (state, action) => {

         state.jobsData = action.payload.jobs;
         state.totalItems = action.payload.totalItems
         state.status = 'succes';
      },
      [fetchJobs.rejected]: (state) => {

         state.status = 'error';
         state.jobsData = [];

      },
   }
})

export const { setTotalCount, setSearchJob, setSearchRes, setJobs, setFilters } = jobsSlice.actions;

export const selectJobs = (state) => state.jobs.jobsData

export default jobsSlice.reducer