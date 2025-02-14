import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { message: null, username: null, firstname:null , date:null, isPosted:false},
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    postTweet: (state, action) => {
      state.value.message = action.payload.message;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.date = action.payload.date;
      state.value.isPosted = action.payload.isPosted;
      console.log(action.payload)
    },
    deleteTweet: (state) => {
      state.value.message = null;
      state.value.username = null;
      state.value.firstname = null;
      state.value.date = null;
      state.value.isPosted = false
    },
  },
});

export const { postTweet, deleteTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
