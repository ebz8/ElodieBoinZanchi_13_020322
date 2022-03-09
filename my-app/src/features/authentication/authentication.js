import { createSlice } from '@reduxjs/toolkit'
import { login, logout, getUserData } from './authenticationThunks'

// mettre des types token: booleann etc.
// ici garder seulement token, loading, error, connected
const initialState = {
    token: Boolean(localStorage.getItem('token')),
    loading: false,
    error: false,
    userData: {},
    fulfilled: false,
    connected: false,
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
            // réflechir au fulfilled
            state.fulfilled = false
            state.token = action.payload.body
        })
        .addCase(login.rejected, (state) => {
            state.loading = false
            state.error = true
            state.token = false
            state.userData = {}
        })
        .addCase(getUserData.pending, (state) => {
            state.loading = true
        })
        .addCase(getUserData.rejected, (state) => {
            state.loading = false
            state.fulfilled = false
            // mais récupérer plutot le msg via payload
            state.error = true
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.userData = action.payload.body
            state.fulfilled = true
        })
        .addCase(logout.fulfilled, (state) => {
            state.token = false
            state.userData = null
            state.fulfilled = false
        })
    }
})

export default authentication.reducer
