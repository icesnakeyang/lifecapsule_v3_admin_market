import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteList: [],
    notePageIndex: 1,
    notePageSize: 10,
  },
  reducers: {
    saveNoteList: (state: any, action: any) => {
      state.noteList = action.payload;
    },
    saveNotePageIndex: (state: any, action: any) => {
      state.notePageIndex = action.payload;
    },
    saveNotePageSize: (state: any, action: any) => {
      state.notePageSize = action.payload;
    },
  },
});

export const { saveNoteList, saveNotePageIndex, saveNotePageSize } =
  noteSlice.actions;
export default noteSlice.reducer;
