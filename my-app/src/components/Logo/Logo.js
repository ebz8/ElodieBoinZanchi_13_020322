import './Logo.scss'
import LogoImg from '../../assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to={`/`} className="logo">
            <img src={LogoImg} alt="Argent Bank Logo"/>
        </Link>
    )
}

export default Logo
