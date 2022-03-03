import './FeatureCard.scss'

import ChatIcon from '../../assets/img/icon-chat.png'
import MoneyIcon from '../../assets/img/icon-money.png'
import SecurityIcon from '../../assets/img/icon-security.png'


const FeatureCard = ({icon, title, text}) => {
    return (
        <div className="feature-card">
            { icon === "chat" && <img src={ChatIcon} alt={`${icon} icon`}/> }
            { icon === "money" && <img src={MoneyIcon} alt={`${icon} icon`}/> }
            { icon === "security" && <img src={SecurityIcon} alt={`${icon} icon`}/> }
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureCard
