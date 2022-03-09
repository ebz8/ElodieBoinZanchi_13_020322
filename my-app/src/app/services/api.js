import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'


// tokens
export const getToken = () => {
    return localStorage.getItem('token')
}
export const removeToken = () => {
    localStorage.removeItem('token')
}
export const setToken = (key) => {
    localStorage.setItem('token', key)
}


// config URLS
export const api = 'http://localhost:3001/api/v1/user/'

// export const api = axios.create({
//   baseURL: 'http://localhost:3001/api/v1/user/',
//   headers: {
//     "Content-Type": "application/json",
    
//   },
// })
// api.interceptors.request.use(
//     (config) => {
//         const token = getToken()
//         if (token) {
//           config.headers['Authorization'] = `Bearer ${token}`;
//         }
    
//         return config;
//       },
    
//       (error) => {
//         return Promise.reject(error);
//       }
// )

// export const argentbankApi = createApi({
//     reducerPath: 'abApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user/' }),
//     prepareHeaders: (headers, {getState}) => {
//         const token = getState().auth.token
//         if (token) {
//           headers.set('authorization', `Bearer ${token}`)
//         }
//       },
//     endpoints: (builder) => ({
//       getUser: builder.query({
//         query: () => `profile`,
//       }),
//     }),
//   })

//   export const { getUser } = argentbankApi





