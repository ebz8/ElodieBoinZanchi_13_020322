import './App.scss'

import { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
// import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from './features/authentication/authenticationThunks'

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import UserPage from './pages/UserPage/UserPage'
import Error404 from './components/Error404/Error404'


function App() {
  const dispatch = useDispatch()
  const { token, userData } = useSelector((state) => state.auth)
  const isConnected = token


  // se baser plutôt sur fulfilled pour le router
  useEffect(()=> {
    isConnected && dispatch(getUserData())
    console.log(userData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path="/profile" element={isConnected ? (<UserPage />) : (<Navigate to='/login'/>)}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App
