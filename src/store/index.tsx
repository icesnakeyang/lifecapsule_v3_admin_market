import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";
import noteSlice from "./noteSlice";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";
import userActSlice from "./userActSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    counterSlice,
    loginSlice,
    noteSlice,
    themeSlice,
    userSlice,
    userActSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
