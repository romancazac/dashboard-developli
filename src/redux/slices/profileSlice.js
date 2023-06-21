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
 export const fetchPostItem = createAsyncThunk(
   'profile/addItemStatus',
   async (params, { getState }) => {
      const {updates, section, id} = params;
     
     try {

       const { profileData } = getState().profile;
   
       const updatedPersonalInfo = [...profileData[id]?.[section], updates];
 
       await axios.put(`${BASE_URL}/profile-info/${id}`, {
         [section]: updatedPersonalInfo
       });
 
       return updatedPersonalInfo;
     } catch (error) {
       console.error('Eroare la efectuarea cererii put:', error);
       throw error;
     }
   }
 );
 export const fetchUpdateItem = createAsyncThunk(
  'profile/updateItemStatus',
  async (params, { getState }) => {
    const { updates, section, id, objId } = params;

    try {
      const { profileData } = getState().profile;
      
      const updatedSection = profileData[id][section].map(item => {
        if (item.id === objId) {
          return {
            ...item,
            ...updates
          };
        }
        return item;
      });

      const updatedProfileData = {
        ...profileData,
        [id]: {
          ...profileData[id],
          [section]: updatedSection
        }
      };

      await axios.patch(`${BASE_URL}/profile-info/${id}`, {
        ...updatedProfileData[id]
      });

      return updatedSection;
    } catch (error) {
      console.error('Eroare la efectuarea cererii PATCH:', error);
      throw error;
    }
  }
);
 export const fetchDeleteItem = createAsyncThunk(
  'profile/deleteItemStatus',
  async (params, { getState }) => {
    const { section, id, itemId } = params;

    try {
      const { profileData } = getState().profile;

      const updatedSection = profileData[id]?.[section].filter(
        (item) => item.id !== itemId
      );
      await axios.put(`${BASE_URL}/profile-info/${id}`, {
        ...profileData[id],
        [section]: updatedSection
      });

      return updatedSection;
    } catch (error) {
      console.error('Eroare la efectuarea cererii put:', error);
      throw error;
    }
  }
);
const initialState = {
   profileData: {},
   forUpdateData: [],
   status:'',
   availabile:true,

}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setForUdateData(state, action) {

         state.forUpdateData= action.payload
      },
      setAvailabil(state, action) {
        state.availabile = action.payload;
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

export const {setForUdateData, setAvailabil} = profileSlice.actions;
export default profileSlice.reducer