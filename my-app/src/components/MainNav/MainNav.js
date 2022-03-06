import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

import { useSelector } from 'react-redux'

const MainNav = () => {
  const {token} = useSelector((state) => state.auth)
  console.log(token)

  return (
    <nav className="main-nav">
      <Logo />
      {/* <NavButton path={`/profile`} name='{user.name.toUpperCase()}'/> */}
      {token ? <NavButton path={`/`} name='Logout' connected='true'/>
      : <NavButton path={`/login`} name='Sign In'/> }
      {/* <NavButton path={`/login`} name='Sign In'/> */}
    </nav>
  )
}

export default MainNav
