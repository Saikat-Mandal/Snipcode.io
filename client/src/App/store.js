import {configureStore , combineReducers} from "@reduxjs/toolkit"
import userSlice from "../feature/todo/userSlice"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, userSlice)

export const store= configureStore({
    reducer : persistedReducer
})  
export const persistor  =  persistStore(store)