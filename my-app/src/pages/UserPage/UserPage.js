import './UserPage.scss'

import PageContainer from '../../components/PageContainer/PageContainer'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import AccountCard from '../../components/AccountCard/AccountCard'
import { useSelector } from 'react-redux'

/**
 * User profile with overview of his different bank accounts and transactions
 * Retrieves global state fetched data
 * @returns {ReactElement}
 */
const UserPage = () => {
  const { firstName, lastName } = useSelector((state) => state.user)

  return (
    <PageContainer title='Profile'>
      <ProfileHeader />
      <AccountCard
        checking="8349"
        amount="2,082.79"/>
        <AccountCard
        checking="6712"
        amount="10,928.42"/>
        <AccountCard
        checking="8349"
        amount="184.30"/>
    </PageContainer>
  )
}

export default UserPage
