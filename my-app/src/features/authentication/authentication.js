import { createSlice } from '@reduxjs/toolkit'
import { login, logout, getUserData } from './authenticationThunks'
// import history from '../app/utils'


const initialState = {
    token: Boolean(localStorage.getItem('token')),
    isLoading: false,
    isError: false,
    userData: {},
}


export const authentication = createSlice({
    name: 'auth',
    initialState,
    // non-async functions
    reducers:{
        // reset to default values
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
        }
    },
    // async functions
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.token = action.payload.body
        })
        .addCase(login.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.token = false
            state.userData = {}
        })
        .addCase(getUserData.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUserData.rejected, (state) => {
            state.isLoading = false
            // state.isError = true
            state.token = false
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            const {token, data} = action.payload
            state.isLoading = false
            state.isError = false
            state.token = token
            state.userData = data
        })
        .addCase(logout.fulfilled, (state) => {
            state.token = false
            state.userData = null
        })
    }
})

export const { reset } = authentication.actions
export default authentication.reducer


// Login
// export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
//     try {
//         return await apiQueries.login(user)
//     } catch(error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         // put error msg in the payload
//         return thunkAPI.rejectWithValue(message)
//     }
// } )