import './MainNav.scss'

import Logo from '../Logo/Logo'
import NavButton from '../NavButton/NavButton'

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <NavButton path={`/login`} name='Sign In'/>
    </nav>
  )
}

export default MainNav
