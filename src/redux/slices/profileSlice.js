import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../constants"


// function for redact personal info & contacts
export const fetchAddItem = createAsyncThunk(
  'profile/addItemStatus',
  async (params, { getState }) => {
    const { updates, section, id } = params;

    try {
      const { user } = getState().auth;

      // Copiază obiectul `profileData` din user și aplică modificările 
      const updatedProfileData = user.profileData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            ...updates,
          };
        }
        return data;
      });
      const update = {
        ...user,
        profileData: updatedProfileData
      }
      await axios.patch(`${BASE_URL}/users/${user.id}`, update);
      return updatedProfileData;
    } catch (error) {
      console.error('Eroare la efectuarea cererii PATCH:', error);
      throw error;
    }
  }
);
// add item in exp, education, language
export const fetchPostItem= createAsyncThunk(
  'profile/fetchPostItem',
  async (params, { getState }) => {
    const { updates, section, id } = params;

    try {
      const { user } = getState().auth;

     
      const obj = {
        ...user,
        profileData: [
          ...user.profileData
        ]
      };
      
      obj.profileData[id] = {
        ...obj.profileData[id],
        data: [...obj.profileData[id].data, updates]
      };

      await axios.patch(`${BASE_URL}/users/${user.id}`, obj);
      
       return obj 
    } catch (error) {
      console.error('Eroare la efectuarea cererii PATCH:', error);
      throw error;
    }
  }
);
// redaction item in exp, education, language
export const fetchUpdateItem = createAsyncThunk(
  'profile/fetchUpdateItem',
  async (params, { getState }) => {
    const { updates, id } = params;

    try {
      const { user } = getState().auth;

      const updatedProfileData = user.profileData.map((item, index) => {
      
        if (index === id) {
          return {
            ...item,
            data: item.data.map((dataItem) => {
              if (dataItem.id === id) {
                return updates;
              }
              return dataItem;
            })
          };
        }
        return item;
      });
      //  console.log('slice' ,updates, objId)
        
      const obj = {
        ...user,
        profileData: updatedProfileData
      };

      await axios.patch(`${BASE_URL}/users/${user.id}`, obj);

      return obj;
    } catch (error) {
      console.error('Eroare la efectuarea cererii PATCH:', error);
      throw error;
    }
  }
);

// delete items in exp, education, language
export const fetchDeleteItem = createAsyncThunk(
  'profile/fetchDeleteItem',
  async (params, { getState }) => {
    const { section, id, itemId } = params;

    try {
      const { user } = getState().auth;



      const updatedProfileData = user.profileData.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            data: item.data.filter((dataItem) =>dataItem.id !== itemId)
          };
        }
        return item;
      });

      const obj = {
        ...user,
        profileData: updatedProfileData
      };


      await axios.patch(`${BASE_URL}/users/${user.id}`, obj);

      return obj;
    } catch (error) {
      console.error('Eroare la efectuarea cererii put:', error);
      throw error;
    }
  }
);
const initialState = {

  forUpdateData: [],
  status: '',
  availabile: true,
  openAside:false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData(state, action) {
      console.log(action.payload)
      state.profileData = action.payload
    },
    setForUdateData(state, action) {

      state.forUpdateData = action.payload
    },
    setAvailabil(state, action) {
      state.availabile = action.payload;
    },
    setOpenAside(state, action) {
      state.openAside = action.payload
    }

  },  
  
  extraReducers: {
    [fetchUpdateItem.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUpdateItem.fulfilled]: (state) => {
      state.status = "succes";
    },
    [fetchUpdateItem.rejected]: (state) => {
      state.status = "error";
    },

    [fetchAddItem.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAddItem.fulfilled]: (state) => {
      state.status = "succes";
    },
    [fetchAddItem.rejected]: (state) => {
      state.status = "error";
    },
    
  
  }
})

export const { setForUdateData, setAvailabil, setProfileData,setOpenAside } = profileSlice.actions;
export default profileSlice.reducer