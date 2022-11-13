import {createSlice} from "@reduxjs/toolkit";

export const userActSlice = createSlice({
    name: "counter",
    initialState: {
        userActPageIndex: 1,
        userActPageSize: 10,
        totalUserAct: 0,
    },
    reducers: {
        saveUserActPageIndex: (state: any, action: any) => {
            state.userActPageIndex = action.payload;
        },
        saveUserActPageSize: (state: any, action: any) => {
            state.userActPageSize = action.payload;
        },
        saveTotalUserAct: (state: any, action: any) => {
            state.totalUserAct = action.payload
        }
    },
});

export const {saveUserActPageIndex, saveUserActPageSize, saveTotalUserAct} = userActSlice.actions;
export default userActSlice.reducer;
