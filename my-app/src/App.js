import "./assets/style/reset.scss"
import "./assets/style/base.scss"

import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "./store/userData/userDataThunks"

import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import UserPage from "./pages/UserPage/UserPage"
import ErrorsPage from "./pages/ErrorsPage/ErrorsPage"

function App() {
  const dispatch = useDispatch()
  const { connected } = useSelector((state) => state.auth)
  const { fetchedData } = useSelector((state) => state.user)

  useEffect(() => {
    connected && dispatch(getUserData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={fetchedData ? <UserPage /> : <Navigate to="/login" />}
        />
        <Route path="/*" element={<ErrorsPage />} />
      </Routes>
    </div>
  )
}

export default App
