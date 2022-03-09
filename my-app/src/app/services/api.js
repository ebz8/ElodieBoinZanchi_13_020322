// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// config URLS
export const api = 'http://localhost:3001/api/v1/user/'

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





