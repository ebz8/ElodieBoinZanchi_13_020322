import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../../services/api'
import { login, logout } from './authenticationThunks'
import { getUserData } from '../userData/userDataThunks'

const initialState = {
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
            state.authError = false
            state.connected = action.payload.message
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.authError = action.error.message
            state.connected = false
        })
        .addCase(logout.fulfilled, (state) => {
            state.connected = false
            state.authError = false
        })
        .addCase(getUserData.fulfilled, (state) => {
            state.loading = false
        })
        .addCase(getUserData.rejected, (state) => {
            state.loading = false
        })
    }
})

export default authentication.reducer
