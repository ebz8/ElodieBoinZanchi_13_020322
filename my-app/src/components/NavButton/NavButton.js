import './NavButton.scss'

import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const NavButton = ({ path, name, action }) => {

  

  return (
    <>
    {action ?
    <li>
      <Link to={path} className="nav-btn" onClick={action} >
          {/* condition pour autres icônes */}
          {name === 'Sign Out' ? <FaSignOutAlt/> : <FaUserCircle />}          
          <p>{name}</p>
      </Link>
    </li>
    :
      <li>
        <Link to={path} className="nav-btn" >
            {/* condition pour autres icônes */}
            <FaUserCircle />
            <p>{name}</p>
        </Link>
      </li>
    }
    </>
  )
}

export default NavButton
