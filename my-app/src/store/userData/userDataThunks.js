import { createAsyncThunk } from "@reduxjs/toolkit"
import { argentbankApi, getToken, removeToken } from "../../services/api"

/**
 * Api call when an user is logged in to retrieve his data 
 */
export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async () => {
    argentbankApi.interceptors.request.use(
      (config) => {
        // Any status code from range of 2xx
        if (getToken()) {
          config.headers["Authorization"] = `Bearer ${getToken()}`
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
    const response = await argentbankApi.post("profile")
    return { ...response.data }
  }
)

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (newData) => {
    argentbankApi.interceptors.request.use(
      (config) => {
        // Any status code from range of 2xx
        if (getToken()) {
          config.headers["Authorization"] = `Bearer ${getToken()}`
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
    const response = await argentbankApi.put("profile", newData)
    return { ...response.data }
  }
)
