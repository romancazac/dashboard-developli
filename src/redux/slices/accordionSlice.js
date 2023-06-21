import { createSlice } from '@reduxjs/toolkit';

const accordionSlice = createSlice({
    name: 'accordion',
    initialState: { 
      accordion: 0,
    },
    reducers: {

    
      setAccordion: (state, action) => {
         state.accordion = action.payload
      }
    }
   })

export const { setAccordion} = accordionSlice.actions;


export default accordionSlice.reducer;