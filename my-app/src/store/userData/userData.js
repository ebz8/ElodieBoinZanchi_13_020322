import { createSlice } from '@reduxjs/toolkit'
import { getUserData, updateUserData } from './userDataThunks'
import { logout } from '../authentication/authenticationThunks'

// mettre des types token: boolean etc.
const initialState = {
    loadingData: false,
    userDataError: false,
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
            state.loadingData = true
        })
        .addCase(getUserData.rejected, (state, action) => {
            state.loadingData = false
            state.fetchedData = false
            state.userDataError = action.payload
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            state.loadingData = false
            state.userDataError = false
            state.email = action.payload.body.email
            state.firstName = action.payload.body.firstName
            state.id = action.payload.body.id
            state.lastName = action.payload.body.lastName
            state.fetchedData = true
        })
        .addCase(updateUserData.pending, (state) => {
            state.loadingData = true
        })
        .addCase(updateUserData.rejected, (state, action) => {
            state.loadingData = false
            state.userDataError = action.payload
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
            state.loadingData = false
            state.userDataError = false
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
        })
        .addCase(logout.fulfilled, (state) => {
            state.fetchedData = false
            state.email = null
            state.firstName = null
            state.id = null
            state.lastName = null
            state.userDataError = false
        })
    }
})

export default userData.reducer
