import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../constants"


export const fetchProfileInfo = createAsyncThunk(
   'profile/fetchProfileStatus',
   async () => {
      const response = await axios.get(`${BASE_URL}/profileInfo`)
      return response.data
   }
)

export const fetchAddItem = createAsyncThunk(
   'profile/addItemStatus',
   async (params, { getState }) => {
     try {
      console.log(params)
       const { profileData } = getState().profile;
       const newItem = { fullName: 'Roman Cazac' };
 
       const updatedPersonalInfo = [
         {
           ...profileData[0]?.personalInfo[0],
           ...newItem,
         },
       ];
 
       await axios.patch(`${BASE_URL}/profileInfo/1`, {
         personalInfo: updatedPersonalInfo,
       });
 
       return updatedPersonalInfo;
     } catch (error) {
       console.error('Eroare la efectuarea cererii PATCH:', error);
       throw error;
     }
   }
 );
const initialState = {
   profileData: {},
   status:''
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setProfileInfo(state, action) {
         const stateName = action.payload
         state.action.payload = action.payload
      }

   },
   extraReducers: {
      [fetchProfileInfo.pending]: (state) => {
         state.status = 'loading';
         state.profileData= [];
      
      },
      [fetchProfileInfo.fulfilled]: (state, action) => {
         state.profileData= action.payload;
         state.status = 'succes';
      },
      [fetchProfileInfo.rejected]: (state) => {
         state.status = 'error';
         state.profileData= [];
        
      },
   }
})

export const {setProfileInfo } = profileSlice.actions;
export default profileSlice.reducer