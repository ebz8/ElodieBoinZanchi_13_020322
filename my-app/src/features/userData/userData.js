import { createSlice } from '@reduxjs/toolkit'
import { getUserData, updateUserData } from './userDataThunks'
import { logout } from '../authentication/authenticationThunks'
// mettre des types token: booleann etc.

const initialState = {
    loading: false,
    error: false,
    fetchedData: false,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
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
        .addCase(getUserData.rejected, (state, action) => {
            state.loading = false
            state.fetchedData = false
            state.error = action.payload
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            // state.userData = action.payload.body
            state.email = action.payload.body.email
            state.firstName = action.payload.body.firstName
            state.id = action.payload.body.id
            state.lastName = action.payload.body.lastName
            state.fetchedData = true
        })
        .addCase(updateUserData.pending, (state) => {
            state.loading = true
        })
        .addCase(updateUserData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        })
        .addCase(logout.fulfilled, (state) => {
            state.fetchedData = false
            state.email = null
            state.firstName = null
            state.id = null
            state.lastName = null
        })
    }
})

export default userData.reducer
