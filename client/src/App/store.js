import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../feature/todo/userSlice"



export const store= configureStore({
    reducer : userSlice
})  