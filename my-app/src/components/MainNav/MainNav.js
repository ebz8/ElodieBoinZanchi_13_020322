import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/authentication/authenticationThunks'


const MainNav = () => {
  const { fetchedData, firstName } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Logo />
      {fetchedData ? (
        <div className='nav-items'>
          <NavButton path={`/profile`} name={firstName}/>
          <NavButton path={`/`} name='Logout' action={handleLogout}/>
        </div>
        )
      : <NavButton path={`/login`} name='Sign In'/> }
    </nav>
  )
}

export default MainNav
