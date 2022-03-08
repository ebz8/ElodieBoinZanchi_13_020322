import './NavButton.scss'

import { FaUserCircle } from 'react-icons/fa'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/authentication/authenticationThunks'

const NavButton = ({path, name, action}) => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)
  //        <Link to={path} className="nav-btn" onClick={dispatch(logout())}>

  

  return (
    <>
    {action ?
      <Link to={path} className="nav-btn" onClick={action} >
          {/* condition pour autres icônes */}
          <FaUserCircle />
          <p>{name}</p>
      </Link>
    :
      <Link to={path} className="nav-btn" >
          {/* condition pour autres icônes */}
          <FaUserCircle />
          <p>{name}</p>
      </Link>
    }
    </>
  )
}

export default NavButton
