import './NavButton.scss'

import { FaUserCircle } from 'react-icons/fa'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userSelector, useDispatch } from 'react-redux'
import { reset, logout } from '../../features/authentication'

const NavButton = ({path, name, connected}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)

  // remplacer le link par un <button> avec un onClick={onLogout}
  const handleLogout = () => {
    dispatch(logout())
    // dispatchEvent(reset())
    navigate('/')
    console.log('user disconnected')
  }
  
  return (
    <>
      {connected ? (
        <button className="nav-btn" onClick={handleLogout}>
        {/* condition pour autres icônes */}
        <FaUserCircle />
        <p>{name}</p>
    </button>
      ) : (
    <Link to={path} className="nav-btn">
        {/* condition pour autres icônes */}
        <FaUserCircle />
        <p>{name}</p>
    </Link>
      )}
  </>
  )
}

export default NavButton
