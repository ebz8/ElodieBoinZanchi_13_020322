import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home'
import UserProfil from './pages/UserProfil/UserProfil'
import SignIn from './pages/SignIn/SignIn'
import Error404 from './pages/Error404/Error404'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/sign-in' element={<SignIn />}/>
        <Route path="/user/:id" element={<UserProfil />}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
    </div>
  )
}

export default App
