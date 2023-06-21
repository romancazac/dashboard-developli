import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { isEquivalent } from "../../utils/isEquivalent";

// First, create the thunk
export const fetchJobs = createAsyncThunk(
   'jobs/fetchJobsStatus',
   async (params) => {
      const { totalCount, filtersParams, sort,searchQ } = params
      const response = await axios.get(`${BASE_URL}/jobs?_start=0&_end=${totalCount}${filtersParams.join('')}&_sort=${sort}${searchQ}`)
      const totalItems = response.headers['x-total-count'];

      // return response.data

      return {
         jobs: response.data,
         totalItems
      }
   }
)


const initialState = {
   jobsData: [],
   savedJobs:[],
   singleJob:{},
   totalCount: 5,
   totalItems: '',
   status: "loading",
   jobSearch: {},
   filter: [],
   sort:'',
   popUp:'',


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
      setSingleJob(state,action) {
         state.singleJob = action.payload
      },
      setJobs(state, action) {
         state.jobsData = action.payload
      },
      setSort(state, action) {
         state.sort = action.payload
      },
      setFilters(state, action) {
         
         const existingIndex = state.filter.findIndex(item => isEquivalent(item, action.payload));

         if (existingIndex !== -1) {
            // Dacă elementul există în array, îl ștergeți
            state.filter = state.filter.filter(item => !isEquivalent(item, action.payload));
         } else {
            state.filter = [...state.filter, action.payload];
         }
      },
      setPopUp(state, action){
         state.popUp = action.payload
      },
      setSavedJob(state, action) {
   
         const itemIndex = state.savedJobs.findIndex((item) => item.id === action.payload.id);
         
         if(itemIndex !== -1) {
            state.savedJobs = state.savedJobs.filter((item) => item.id !== action.payload.id)
         } else {
            state.savedJobs.push(action.payload)
         }
         localStorage.setItem('saved', JSON.stringify(state.savedJobs))
      },
      setSavedJobsFromLs(state, action) {
         state.savedJobs = action.payload
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

export const { setSingleJob,setSavedJobsFromLs,setSavedJob, setTotalCount, setSearchJob, setSearchRes, setJobs, setFilters, setSort,setPopUp } = jobsSlice.actions;

export const selectJobs = (state) => state.jobs.jobsData

export default jobsSlice.reducer