import { createSlice } from '@reduxjs/toolkit';

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: { 
      open: false,
      message:''
    },
    reducers: {

    
      setAlerts: (state, action) => {
         state.message = action.payload.message
         state.open = action.payload.open;
         
      },
      clearAlerts: (state) => {      
        state.open = false;
      //   state.message = '';
      }
    }
   })

export const { setAlerts,clearAlerts} = alertsSlice.actions;


export default alertsSlice.reducer;