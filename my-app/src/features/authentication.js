import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api, getToken, removeToken, setToken } from '../app/services/api'
import axios from 'axios'
// import { createBrowserHistory } from '../app/utils'



const initialState = {
    token: null,
    isLoading: false,
    isError: false,
    userData: {},
}


export const login = createAsyncThunk('auth/login', async (data) => {
    const response = await axios.post(api + 'login', data)
    // keep in localStorage
    if (response.data) {
        console.log(response)
        setToken(response.data.body.token)
        console.log(response.data.message + ' with following token set in localStorage: ' + response.data.body.token)
        // history.push('/profile')
    }
    return response.data
})

// fetch user data
export const getUserData = createAsyncThunk('auth/getUserData', async (_, {rejectWithValue}) => {
    try {
        const accessToken = getToken()
        console.log(accessToken)
        api.defaults.headers.Authorization = `Bearer ${accessToken}`
        const response = await api.get('/user')
        console.log(response.data)
        return {...response.data, accessToken}
    } catch (error) {
        removeToken()
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
})

// const logout = () => {
//     removeToken()
//     console.log('token retiré du localStorage')
// }

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
        .addCase(login.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.token = null
            state.userData = {}
        })
        .addCase(getUserData.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUserData.rejected, (state) => {
            state.isLoading = false
            // state.isError = true
            state.token = null
            state.userData = {}
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            const {token, data} = action.payload
            state.isLoading = false
            state.isError = false
            state.token = token
            state.userData = data
        })
        // .addCase(logout.fulfilled, (state) => {
        //     state.token = null
        //     state.userData = null
        // })
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