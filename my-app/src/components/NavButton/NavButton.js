import './NavButton.scss'

import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const NavButton = ({ path, name, action }) => {

  

  return (
    <>
    {action ?
      <Link to={path} className="nav-btn" onClick={action} >
          {/* condition pour autres icônes */}
          {name === 'Sign Out' ? <FaSignOutAlt/> : <FaUserCircle />}          
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
