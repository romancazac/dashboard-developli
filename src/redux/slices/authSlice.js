import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../constants';



// sing in
export const fetchSingIn = createAsyncThunk(
    'user/fetchSingInstatus',
    async (params) => {
      const { username, password } = params

      const { data} = await axios.post(`${BASE_URL}/login`, {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
     
      return data
    }

    
)
// /auth
export const fetchAuthMe = createAsyncThunk(
    'user/fetchAuthMestatus',
    async (token) => {
        const { data} = await axios.get(`${BASE_URL}/users`,{        
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
       
        return data
    }
)
// registration
export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistrationMestatus',
    async (data) => {
      const { email, password, phone, username } = data;
    
        const res = await axios.post(`${BASE_URL}/register`, {
          email,
          password,
          phone,
          username
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return res.data;
      }


    
)

const userSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: null,
      phone: null,
      loading: false,
      error: null,
      popUp: false,
      registrationForm:false
    },
    reducers: {

      logout: (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
        state.error = null;
      },
      setOpenPop: (state, action) => {
         state.popUp = action.payload
      },
      setRegistration: (state, action) => {
        state.registrationForm = action.payload
     }
    },
    extraReducers: {
      [fetchAuthMe.pending]: (state) => {
        state.user = ''
        state.token = ''
        state.phone = ''
        state.loading = true;
      },
      [fetchAuthMe.fulfilled]: (state, action) => {     
        state.user = action.payload;
        state.phone = action.payload.phone
        state.loading = false;
      },
      [fetchAuthMe.rejected]: (state) => {
        state.loading = false;
        state.error = true;
        window.localStorage.removeItem('token');
      },
// ----------
      [fetchSingIn.pending]: (state) => {
        state.user = ''
        state.token = ''
        state.phone = ''
        state.loading = true;
      },
      [fetchSingIn.fulfilled]: (state, action) => {
        
        state.user = action.payload;
        state.token = action.payload.token;
        state.phone = action.payload.phone
        state.loading = false;
      },
      [fetchSingIn.rejected]: (state) => {
        state.loading = false;
        state.error = true;
    
      },
      // registration
      [fetchRegistration.pending]: (state) => {
        state.user = ''
        state.token = ''
        state.loading = true;
      },
      [fetchRegistration.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
      },
      [fetchRegistration.rejected]: (state) => {
        state.loading = false;
        state.error = true;
    
      },
   }
});
export const selectIsAuth = state => Boolean(state.auth.user)

export const {setRegistration,setOpenPop, loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions;


export default userSlice.reducer;