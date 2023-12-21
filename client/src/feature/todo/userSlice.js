import { createSlice , nanoid} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        token : null,
        isAuthenticated:false,
        darkMode:false,
        dp:null
     },
    reducers :{
        updateToken: (state , action)=>{
            const token  = action.payload
            state.token = token
            state.isAuthenticated = true
        },
        removeToken: (state , action)=>{
            state.token = null
            state.isAuthenticated = false
        },
        turnOnDarkMode: (state , action)=>{
            state.darkMode = !state.darkMode
        },
        addDp:(state , action)=>{
            state.dp = action.payload
        },
        removeDp:(state , action)=>{
            state.dp = null
        }
    }
})

export const {updateToken , removeToken , turnOnDarkMode , addDp , removeDp} = userSlice.actions

export default userSlice.reducer