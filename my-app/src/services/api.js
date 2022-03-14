import axios from 'axios'

// config URLS
// export const api = 'http://localhost:3001/api/v1/user/'
export const instance = axios.create({
    baseURL: "http://localhost:3001/api/v1/user/",
    headers: {
      "Content-Type": "application/json",
    },
  })

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
