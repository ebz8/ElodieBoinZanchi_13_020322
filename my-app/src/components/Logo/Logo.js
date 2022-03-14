import './Logo.scss'
import LogoImg from '../../assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'

const Logo = ({ center }) => {
    return (
        <Link to={`/`} className={center ? 'logo center' : 'logo'}>
            <img src={LogoImg} alt="Argent Bank Logo"/>
        </Link>
    )
}

export default Logo
