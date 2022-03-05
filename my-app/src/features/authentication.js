import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiQueries from './apiQueries'


const initialState = {
    token: null,
    isLoading: false,
    isError: false,
    userData:{},
}

// Login
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await apiQueries.login(user)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        // put error msg in the payload
        return thunkAPI.rejectWithValue(message)
    }
} )

// Logout
// export const logout = createAsyncThunk('auth/logout', async () => {
//     await services.logout()
// })

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
            const {token, data} = action.payload
            state.isLoading = false
            state.isError = false
            state.token = token
            state.userData = data
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.token = null
            state.userData = null
        })
        // .addCase(logout.fulfilled, (state) => {
        //     state.token = null
        //     state.userData = null
        // })
    }
})

export const { reset } = authentication.actions
export default authentication.reducer