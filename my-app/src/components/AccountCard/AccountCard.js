import './AccountCard.scss'

const AccountCard = ({checking, amount, desc}) => {
  return (
    <div className="account-card">
        <div className="account-content">
            <h3>Argent Bank Checking (x{checking})</h3>
            <p className="amount">${amount}</p>
            <p>Available Balance</p>
        </div>
          <button className="main-button">View transactions</button>
        </div>
  )
}

export default AccountCard