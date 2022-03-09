import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/authentication/authenticationThunks'


const MainNav = () => {
  const { fulfilled, userData } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Logo />
      {fulfilled ? (
        <div className='nav-items'>
          <NavButton path={`/profile`} name={userData.firstName}/>
          <NavButton path={`/`} name='Logout' action={handleLogout}/>
        </div>
        )
      : <NavButton path={`/login`} name='Sign In'/> }
    </nav>
  )
}

export default MainNav
