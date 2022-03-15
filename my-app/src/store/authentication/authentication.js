import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './authenticationThunks'
import { getToken } from '../../services/api'
import { getUserData } from '../userData/userDataThunks'

// mettre des types token: booleann etc.
const initialState = {
    token: null,
    loading: false,
    authError: false,
    connected: Boolean(getToken()),
}

export const authentication = createSlice({
    name: 'auth',
    initialState,
    // non-async functions
    reducers: {},
    // async functions
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            console.log(action.payload.body.token)
            state.authError = false
            state.token = action.payload.body.token
            state.connected = action.payload.message
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.authError = action.error.message
            state.token = false
            state.connected = false
        })
        .addCase(logout.fulfilled, (state) => {
            state.token = false
            state.connected = false
            state.authError = false
        })
        .addCase(getUserData.fulfilled, (state) => {
            state.loading = false
        })
    }
})

export default authentication.reducer
