import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { message: null, user:[] , date:null},
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    postTweet: (state, action) => {
      state.value.message = action.payload.message;
      state.value.user.push(action.payload)
      //state.value.firstname = action.payload.firstname;
      state.value.date = action.payload.date;
      console.log(action.payload)
    },
    deleteTweet: (state) => {
      state.value.message = null;
      state.value.user = [];
      //state.value.firstname = null;
      state.value.date = null;
    },
  },
});

export const { postTweet, deleteTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
