import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../constants"


export const fetchProfileInfo = createAsyncThunk(
   'profile/fetchProfileStatus',
   async () => {
      const response = await axios.get(`${BASE_URL}/profile-info`)
      return response.data
   }
)

export const fetchAddItem = createAsyncThunk(
   'profile/addItemStatus',
   async (params, { getState }) => {
      const {updates, section, id} = params;
     
     try {

       const { profileData } = getState().profile;
   
       const updatedPersonalInfo = [
         {
           ...profileData[id]?.[section[0]],
           ...updates,
         },
       ];
 
       await axios.patch(`${BASE_URL}/profile-info/${id}`, {
         [section]: updatedPersonalInfo
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
   forUpdateData: [],
   status:''

}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setForUdateData(state, action) {

         state.forUpdateData= action.payload
      }

   },
   extraReducers: {
      [fetchProfileInfo.pending]: (state) => {
         state.status = 'loading';
         state.profileData= [...state.profileData];
      
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

export const {setForUdateData} = profileSlice.actions;
export default profileSlice.reducer