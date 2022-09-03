import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "loginSlice",
    initialState: {
        userLoginLogPageIndex: 1,
        userLoginLogPageSize: 10,
        userLoginLogList: [],
        userLoginLogTotal: 0,
        userLoginStatisticList: []
    },
    reducers: {
        saveUserLoginLogPageIndex: (state: any, action: any) => {
            state.userLoginLogPageIndex = action.payload;
        },
        saveUserLoginLogPageSize: (state: any, action: any) => {
            state.userLoginLogPageSize = action.payload;
        },
        saveUserLoginLogList: (state: any, action: any) => {
            state.userLoginLogList = action.payload;
        },
        saveUserLoginLogTotal: (state: any, action: any) => {
            state.userLoginLogTotal = action.payload;
        },
        saveUserLoginStatisticList: (state: any, action: any) => {
            state.userLoginStatisticList = action.payload
        }
    },
});

export const {
    saveUserLoginLogPageIndex,
    saveUserLoginLogPageSize,
    saveUserLoginLogList,
    saveUserLoginLogTotal,
    saveUserLoginStatisticList
} = userSlice.actions;
export default userSlice.reducer;
