import { configureStore } from '@reduxjs/toolkit'

import authentication from '../features/authentication';

export const store = configureStore({
  reducer: {
    authentication: authentication,
  },
});
