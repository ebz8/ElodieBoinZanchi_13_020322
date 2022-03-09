import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, getToken, setToken, removeToken } from '../../app/services/api'
import axios from 'axios'


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

export const logout = createAsyncThunk('auth/signOut', async () => {
    removeToken()
    console.log('token retiré du localStorage')
})

// fetch user data : action appelée quand un jeton est dans le localStorage
// s'il ne l'est plus : reset
export const getUserData = createAsyncThunk('auth/getUserData', async (_, {rejectWithValue}) => {
    try {
        const accessToken = getToken()
        console.log('coucou depuis getUserData')
        const response = await axios({
            method: 'post',
            url: api + 'profile',
            headers: {
				Authorization: `Bearer ${accessToken}`,
			},
        })
        console.log(response)
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
//         console.log('coucou depuis getUserData')
//         // Un "Bearer Token" est un JWT dont le rôle est d'indiquer que l'utilisateur qui accède aux ressources est bien authentifié
//         // api.defaults.headers.Authorization = `Bearer ${accessToken}`
//         const response = await axios.post(api + 'profile',  {
//             headers: {
//               Authorization: `Bearer ${accessToken}`
//             }
//           })
//         console.log(response)
//         return {...response.data, accessToken}
//     } catch (error) {
//         removeToken()
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return rejectWithValue(message)
//     }
// })