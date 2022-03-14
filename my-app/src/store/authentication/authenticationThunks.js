import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, getToken, setToken, removeToken } from '../../services/api'
import axios from 'axios'
import { instance } from '../../services/api'


export const login = createAsyncThunk('auth/login', async (data) => {   
    instance.interceptors.response.use(
        (response) => { // Any status code from range of 2xx
            setToken(response.data.body.token)
            return response
        },
        (error) => { // Any status codes outside range of 2xx
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return Promise.reject(message)
        })
    const response = await instance.post(api + 'login', data)
    return response.data
})


// export const login = createAsyncThunk('auth/login', async (data) => {
//     const response = await axios.post(api + 'login', data)
//     // keep in localStorage
//     if (response.data) {
//         setToken(response.data.body.token)
//         console.log(response.data.message + ' with following token set in localStorage: ' + response.data.body.token)
//         // history.push('/profile')
//     }
//     return response.data
// })

export const logout = createAsyncThunk('auth/signOut', async () => {
    removeToken()
    console.log('token retiré du localStorage')
})

// fetch user data : action appelée quand un jeton est dans le localStorage
// s'il ne l'est plus : reset
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

            const response = await instance.post(api + 'profile')

        return {...response.data, accessToken}
    } catch (error) {
        // removeToken()
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
})



// export const getUserData = createAsyncThunk('auth/getUserData', async (_, {rejectWithValue}) => {
//     try {
//         const accessToken = getToken()
//         const response = await axios({
//             method: 'post',
//             url: api + 'profile',
//             headers: {
// 				Authorization: `Bearer ${accessToken}`,
// 			},
//         })
//         return {...response.data, accessToken}
//     } catch (error) {
//         // removeToken()
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return rejectWithValue(message)
//     }
// })
