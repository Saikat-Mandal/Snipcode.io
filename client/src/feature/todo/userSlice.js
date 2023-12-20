import { createSlice , nanoid} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        token : null
     },
    reducers :{
        updateToken: (state , action)=>{
            const token  = action.payload
            state.token = token
        },
        removeToken: (state , action)=>{
            state.token = null
        }
    }
})

export const {updateToken , removeToken} = userSlice.actions

export default userSlice.reducer