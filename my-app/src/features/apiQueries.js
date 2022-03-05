import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { api, getToken, removeToken, setToken } from '../app/services/api'
import { createBrowserHistory } from '../app/utils'


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

// const logout = () => {
//     removeToken()
//     console.log('token retiré du localStorage')
// }