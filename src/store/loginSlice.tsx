import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    token: 0,
    userName: "unsign",
  },
  reducers: {
    saveUserLogin: (state: any, action: any) => {
      state.token = action.payload.token;
      state.userName = action.payload.loginName;
    },
    clearUserLogin: (state: any) => {
      state.token = "";
      state.userName = "unsign";
    },
  },
});

export const { saveUserLogin, clearUserLogin } = loginSlice.actions;
export default loginSlice.reducer;
