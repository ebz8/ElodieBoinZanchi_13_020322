import { Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import UserPage from './pages/UserPage/UserPage'
import Error404 from './components/Error404/Error404'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/login' element={<LoginPage />}/>
        <Route path="/profile" element={<UserPage />}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
    </div>
  )
}

export default App
