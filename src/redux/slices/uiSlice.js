import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   asideNavOpen: false,
   asideProfileOpen: false,
   asideFilter: false,
   usersChat: false,
}

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      setOpenNav(state, action) {
         state.asideNavOpen = action.payload
      },
      setOpenProfile(state, action) {
         state.asideProfileOpen = action.payload
      },
      setOpenFilter(state, action) {
         state.asideFilter = action.payload
      },
      setOpenUsers(state, action) {
         state.usersChat = action.payload
      }
   }

})

export const { setOpenNav, setOpenProfile, setOpenFilter,setOpenUsers } = uiSlice.actions;
export default uiSlice.reducer
