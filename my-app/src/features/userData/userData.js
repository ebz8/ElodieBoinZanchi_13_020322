import { createSlice } from '@reduxjs/toolkit'
import { getUserData, updateUserData } from './userDataThunks'

// mettre des types token: booleann etc.
const initialState = {
    loading: false,
    error: false,
    fetchedData: false,
    firstName: null,
    lastName: null,
    email: null,
}

export const userData = createSlice({
    name: 'user',
    initialState,
    // non-async functions
    reducers: {},
    // async functions
    extraReducers: (builder) => {
        builder
        .addCase(getUserData.pending, (state) => {
            state.loading = true
        })
        .addCase(getUserData.rejected, (state) => {
            state.loading = false
            state.fetchedData = false
            // mais récupérer plutot le msg via payload
            state.error = true
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.userData = action.payload.body
            state.fetchedData = true
        })
        .addCase(updateUserData.pending, (state) => {
            state.loading = true
        })
        .addCase(updateUserData.rejected, (state) => {
            state.loading = false
            state.error = true
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        })
    }
})

export default userData.reducer
