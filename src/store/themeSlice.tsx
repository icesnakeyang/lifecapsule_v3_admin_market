import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "loginSlice",
  initialState: {
    themeListWeb: [],
    themeWebPageIndex: 1,
    themeWebPageSize: 10,
    currentThemeBackground: "",
    currentThemeBlockDark: "",
    currentThemeBlockLight: "",
    currentThemeTextLight: "",
    currentThemeTextDark: "",
    currentThemeTextHolder: "",
  },
  reducers: {
    saveThemeListWeb: (state: any, action: any) => {
      state.themeListWeb = action.payload;
    },
    saveThemeWebPageIndex: (state: any, action: any) => {
      state.themeWebPageIndex = action.payload;
    },
    saveThemeWebPageSize: (state: any, action: any) => {
      state.themeWebPageSize = action.payload;
    },
    saveCurrentThemeBackground: (state: any, action: any) => {
      state.currentThemeBackground = action.payload;
    },
    saveCurrentThemeBlockDark: (state: any, action: any) => {
      state.currentThemeBlockDark = action.payload;
    },
    saveCurrentThemeBlockLight: (state: any, action: any) => {
      state.currentThemeBlockLight = action.payload;
    },
    saveCurrentThemeTextLight: (state: any, action: any) => {
      state.currentThemeTextLight = action.payload;
    },
    saveCurrentThemeTextDark: (state: any, action: any) => {
      state.currentThemeTextDark = action.payload;
    },
    saveCurrentThemeTextHolder: (state: any, action: any) => {
      state.currentThemeTextHolder = action.payload;
    },
  },
});

export const {
  saveThemeListWeb,
  saveThemeWebPageIndex,
  saveThemeWebPageSize,
  saveCurrentThemeBackground,
  saveCurrentThemeBlockDark,
  saveCurrentThemeBlockLight,
  saveCurrentThemeTextLight,
  saveCurrentThemeTextDark,
  saveCurrentThemeTextHolder,
} = themeSlice.actions;
export default themeSlice.reducer;
