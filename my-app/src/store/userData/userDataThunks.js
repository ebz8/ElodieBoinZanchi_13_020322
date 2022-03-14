import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance, getToken, removeToken } from "../../services/api"

/**
 * Api call when an user is logged in to retrieve his data 
 */
export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async () => {
    const accessToken = getToken()
    instance.interceptors.request.use(
      (config) => {
        // Any status code from range of 2xx
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => {
        // Any status codes outside range of 2xx
        removeToken()
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return Promise.reject(message)
      }
    )
    const response = await instance.post("profile")
    return { ...response.data, accessToken }
  }
)

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (newData) => {
    const accessToken = getToken()
    instance.interceptors.request.use(
      (config) => {
        // Any status code from range of 2xx
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`
          config.data = newData
        }
        return config
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
    const response = await instance.put("profile")
    return { ...response.data }
  }
)
