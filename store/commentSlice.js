import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "commentSlice",
  initialState: {
    text: "",
    comments: [],
  },

  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setComments: (state, action) => {
      state.comments = [...action.payload];
    },
    setCommentId: (state, action) => {
      state.newCommentId = action.payload;
    },
  },
});
export const { setCommentId, setComments, setText } = commentSlice.actions;
export default commentSlice.reducer;
