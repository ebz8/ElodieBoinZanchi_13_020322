import './NavButton.scss'

import { Link } from 'react-router-dom'

const NavButton = ({path, name}) => {
  return (
    <Link to={path} className="nav-btn">
        <i className="fa fa-user-circle" />
        <p>{name}</p>
    </Link>
  )
}

export default NavButton
