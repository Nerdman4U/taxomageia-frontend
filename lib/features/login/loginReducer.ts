import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  email: null,
  token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout(state) {
      state.loggedIn = false;
      state.email = null;
      state.token = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
