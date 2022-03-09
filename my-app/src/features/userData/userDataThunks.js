import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, getToken, removeToken } from '../../app/services/api'
import axios from 'axios'

// fetch user data : action appelée quand un jeton est dans le localStorage
export const getUserData = createAsyncThunk('auth/getUserData', async (_, {rejectWithValue}) => {
    try {
        const accessToken = getToken()
        const response = await axios({
            method: 'post',
            url: api + 'profile',
            headers: {
				Authorization: `Bearer ${accessToken}`,
			},
        })
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