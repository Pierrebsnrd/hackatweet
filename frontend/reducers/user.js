import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null, firstname: null, id: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.id = action.payload.id;
      console.log(action.payload)
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.firstname = null;
      state.value.id = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
