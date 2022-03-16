import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance, setToken, removeToken, saveToken } from "../../services/api"

export const login = createAsyncThunk("auth/login", async (data) => {
  instance.interceptors.response.use(
    (response) => {  
      console.log(response)    
      return response
    },
    (error) => {
      // Any status codes outside range of 2xx
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return Promise.reject(message)
    }
  )
  const response = await instance.post("login", data)
  setToken(response.data.body.token)

  return response.data
})

export const logout = createAsyncThunk("auth/signOut", async () => {
  removeToken()
})
