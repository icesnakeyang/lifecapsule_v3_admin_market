import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
        name: "loginSlice",
        initialState: {
            themeListWeb: [],
            themeListApp: [],
            themeWebPageIndex: 1,
            themeWebPageSize: 10,
            currentThemeBackground: "",
            currentThemeBlockDark: "",
            currentThemeBlockLight: "",
            currentThemeTextLight: "",
            currentThemeTextDark: "",
            currentThemeTextHolder: "",
            currentThemeColorDanger: "",
            currentThemeColorDanger2: "",
            themeStatus: '',
            defaultTheme: false
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
            saveCurrentThemeColorDanger: (state: any, action: any) => {
                state.currentThemeColorDanger = action.payload;
            },
            saveCurrentThemeColorDanger2: (state: any, action: any) => {
                state.currentThemeColorDanger2 = action.payload;
            },
            saveThemeListApp: (state: any, action: any) => {
                state.themeListApp = action.payload
            },
            saveThemeStatus: (state: any, action: any) => {
                state.themeStatus = action.payload
            },
            saveDefaultTheme: (state: any, action: any) => {
                state.defaultTheme = action.payload
            }
        },
    })
;

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
    saveCurrentThemeColorDanger,
    saveCurrentThemeColorDanger2,
    saveThemeListApp,
    saveThemeStatus,
    saveDefaultTheme
} = themeSlice.actions;
export default themeSlice.reducer;
