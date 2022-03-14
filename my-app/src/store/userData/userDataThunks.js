import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, instance, getToken, removeToken } from '../../services/api'
import axios from 'axios'

// fetch user data : action appelée quand un jeton est dans le localStorage
export const getUserData = createAsyncThunk('auth/getUserData', async (_, {rejectWithValue}) => {
    const accessToken = getToken()

    try {
        instance.interceptors.request.use(
            (config) => { // Any status code from range of 2xx
                if (accessToken) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`
                }
                return config
            },
            (error) => { // Any status codes outside range of 2xx
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                return Promise.reject(message)
            })

            const response = await instance.post('profile')

        return {...response.data, accessToken}
    } catch (error) {
        removeToken()
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
})

export const updateUserData = createAsyncThunk('auth/updateUserData', async (newData) => {
    try {
        const accessToken = getToken()
        const response = await axios({
            method: 'put',
            url: api + 'profile',
            headers: {
				Authorization: `Bearer ${accessToken}`,
			},
            data: newData,
        })
        return {...response.data}
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return message
    }    
})