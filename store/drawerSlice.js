import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState: {
    open: false,
    drawerWidth: 160,
  },

  reducers: {
    setOpen: (state, actions) => {
      state.open = !state.open;
    },
  },
});
export const { setOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
