import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

// import { useNavigate } from 'react-router-dom'
// import { userSelector, useDispatch } from 'react-redux'
// import { reset, logout } from '../../features/authentication'

const MainNav = () => {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)
  return (
    <nav className="main-nav">
      <Logo />
      {/* 
      
      {user ? (
      <NavButton path={`/profile`} name='{user.name.toUpperCase()}'/>
      <NavButton path={`/`} name='Logout'/>
      ) : <NavButton path={`/login`} name='Sign In'/> }

      */}
      <NavButton path={`/login`} name='Sign In'/>
    </nav>
  )
}

export default MainNav
