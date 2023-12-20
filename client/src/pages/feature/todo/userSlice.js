import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'token',
    initialState : {
        token : null
     },
    reducers :{
        updateToken: (state , action)=>{
            const jwtToken  = action.payload
            state.token = jwtToken
        },
        removeToken: (state , action)=>{
            state.token = null
        }
    }
})

export const {updateToken , removeToken} = userSlice.actions

export default userSlice.reducer