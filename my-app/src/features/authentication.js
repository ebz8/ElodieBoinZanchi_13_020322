import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import services from './services'
// import fetchApi from './services'


// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await services.register(user)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        // put error msg in the payload
        return thunkAPI.rejectWithValue(message)
    }
} )

// Login
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await services.login(user)
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
    // non async functions
    reducers:{
        // reset to default values
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    // async functions
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            // get error msg from payload of thunkAPI.rejectWithValue(message)
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            // get error msg from payload of thunkAPI.rejectWithValue(message)
            state.message = action.payload
            state.user = null
        })
        // .addCase(logout.fulfilled, (state) => {
        //     state.user = null
        // })
    }
})

export const { reset } = authentication.actions
export default authentication.reducer