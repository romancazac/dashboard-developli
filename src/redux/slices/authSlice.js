import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../constants';



// sing in
export const fetchSingIn = createAsyncThunk(
  'user/fetchSingInstatus',
  async (params) => {
    const { email, password } = params

    const { data } = await axios.post(`${BASE_URL}/auth`, {
      email,
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
    try {
      const { data } = await axios.get(`${BASE_URL}/auth_me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return data
    } catch (error) {
      console.log(error)
    }

  }
)
// registration
export const fetchRegistration = createAsyncThunk(
  'user/fetchRegistrationMestatus',
  async (data) => {

    const res = await axios.post(`${BASE_URL}/register`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }



)


export const fetchProfileInfo = createAsyncThunk(
  'profile/fetchDataStatus',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`)

      return response.data
    } catch (error) {
      console.log(error)
    }

  }
)


const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {

    logout: (state) => {
      state.user = null;
      state.token = null;
      window.localStorage.removeItem('token')

    },
    setRegistration: (state, action) => {
      state.registrationForm = action.payload
    }
  },
  extraReducers: {
    [fetchAuthMe.pending]: (state) => {
      state.user = null;
      state.loading = true;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {

      state.user = action.payload;
      state.loading = false;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.loading = false;
      state.error = true;
     
    },
    // ----------
    [fetchSingIn.pending]: (state) => {
      state.user = null
      state.token = ''
      state.loading = true;
    },
    [fetchSingIn.fulfilled]: (state, action) => {

      state.user = action.payload.data;
      state.token = action.payload.token
      state.loading = false;
    },
    [fetchSingIn.rejected]: (state) => {
      state.loading = false;
      state.error = true;

    },
    // registration
    [fetchRegistration.pending]: (state) => {
      state.user = {}
      state.token = ''
      state.loading = true;
    },
    [fetchRegistration.fulfilled]: (state, action) => {

      state.user = action.payload.data;
      state.token = action.payload.token
      state.loading = false;
    },
    [fetchRegistration.rejected]: (state) => {
      state.loading = false;
      state.error = true;

    },
     // get data

    [fetchProfileInfo.pending]: (state) => {
      state.status = 'loading';
      state.user.profileData = [...state.user.profileData];

    },
    [fetchProfileInfo.fulfilled]: (state, action) => {

      state.user.profileData = action.payload.profileData;
      state.userstatus = 'succes';
    },
    [fetchProfileInfo.rejected]: (state) => {

      state.status = 'error';
      state.user.profileData = [];

    }
  
  }
});
export const selectIsAuth = state => Boolean(state.auth.user)

export const { setRegistration, setOpenPop, loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions;


export default userSlice.reducer;