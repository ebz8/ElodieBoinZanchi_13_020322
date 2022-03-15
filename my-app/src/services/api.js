import axios from 'axios'

// config URL
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

// // tokens
// export const getToken = () => {
//   return localStorage.getItem('token')
// }
// export const removeToken = () => {
//   localStorage.removeItem('token')
//   sessionStorage.removeItem('token')
// }
// export const setToken = (key) => {
// sessionStorage.setItem('token', key)
// }
// export const saveToken = (key) => {
// localStorage.setItem('token', key)
// }