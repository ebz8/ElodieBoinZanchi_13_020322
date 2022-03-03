import './MainNav.scss'
import Logo from '../../assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'



const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to={`/`}>
        <Logo alt="Argent Bank Logo" className="logo"/>
      </Link>
    </nav>
  )
}

export default MainNav
