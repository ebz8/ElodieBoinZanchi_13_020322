import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
// import { getToken } from './app/services/api'
// import { getUserData } from './features/authentication'

import * as serviceWorker from './serviceWorker'

// if(getToken()) {
//   console.log('index')
//   store.dispatch(getUserData())
// }

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
