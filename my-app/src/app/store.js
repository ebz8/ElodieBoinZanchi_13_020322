import { configureStore } from '@reduxjs/toolkit'

// import { argentbankApi } from './services/api';
import authentication from '../features/authentication/authentication';

export const store = configureStore({
  reducer: {
    auth: authentication,
  //   // Add the generated reducer as a specific top-level slice
  //   [argentbankApi.reducerPath]: argentbankApi.reducer,
  },
  // // Adding the api middleware enables caching, invalidation, polling,
  // // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(argentbankApi.middleware),
})
