

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../constants';




export const fetchUsers = createAsyncThunk(
  'chat/fetchUserstatus',
  async (params) => {


    const { data } = await axios.get(`${BASE_URL}/users?_select=id,fullName`);

    return data
  }


)


const chatSlice = createSlice({
  name: 'chat',
  initialState: {
   users:[],
   messages:[],
   status:''
  },
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    }
   
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.users = [];
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {

      state.users = action.payload;
      state.status = 'succes';
    },
    [fetchUsers.rejected]: (state) => {
      state.status = 'error';
      state.users = [];

     
    },

  }
});


export const { setMessages } = chatSlice.actions;


export default chatSlice.reducer;