import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './authenticationThunks'

// mettre des types token: booleann etc.
// ici garder seulement token, loading, error, connected
const initialState = {
    token: false,
    loading: false,
    error: false,
    connected: Boolean(localStorage.getItem('token')),
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
            state.loading = false
            state.error = false
            state.token = action.payload.body
            state.connected = true
        })
        .addCase(login.rejected, (state) => {
            state.loading = false
            state.error = true
            state.token = false
            state.connected = false
        })
        .addCase(logout.fulfilled, (state) => {
            state.token = false
            state.connected = false
        })
    }
})

export default authentication.reducer
