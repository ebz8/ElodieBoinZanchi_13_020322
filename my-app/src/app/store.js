import { configureStore } from '@reduxjs/toolkit'

// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});
