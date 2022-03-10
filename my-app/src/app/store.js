import { configureStore } from '@reduxjs/toolkit'

import authentication from '../features/authentication/authentication'
import userData from '../features/userData/userData'

export const store = configureStore({
  reducer: {
    auth: authentication,
    user: userData,
  },
})
