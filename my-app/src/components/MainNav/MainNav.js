import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authentication/authenticationThunks'


const MainNav = () => {
  const { fetchedData, firstName } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="main-nav">
      <Logo center={fetchedData ? true : false}/>
      {fetchedData ? (
        <ul className='nav-items'>
          <NavButton path={`/profile`} name={firstName}/>
          <NavButton path={`/login`} name='Sign Out' action={handleLogout}/>
        </ul>
        )
      : <NavButton path={`/login`} name='Sign In'/> }
    </header>
  )
}

export default MainNav
