import { createAsyncThunk } from "@reduxjs/toolkit"
import { setToken, removeToken } from "../../services/api"
import { instance } from "../../services/api"

export const login = createAsyncThunk("auth/login", async (data) => {
  instance.interceptors.response.use(
    (response) => {
      // Any status code from range of 2xx
      setToken(response.data.body.token)
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
  return response.data
})

export const logout = createAsyncThunk("auth/signOut", async () => {
  removeToken()
  console.log("token retiré du localStorage")
})
