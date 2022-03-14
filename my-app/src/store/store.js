import { configureStore } from '@reduxjs/toolkit'

import authentication from './authentication/authentication'
import userData from './userData/userData'

export const store = configureStore({
  reducer: {
    auth: authentication,
    user: userData,
  },
})
