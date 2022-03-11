import "./App.scss"

import { useEffect } from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "./features/userData/userDataThunks"

import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import UserPage from "./pages/UserPage/UserPage"
import ErrorsPage from "./pages/ErrorsPage/ErrorsPage"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { connected } = useSelector((state) => state.auth)
  const { fetchedData, loading } = useSelector((state) => state.user)

  useEffect(() => {
    connected && dispatch(getUserData())
    fetchedData && navigate("/profile")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, fetchedData])
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
