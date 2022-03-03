import './UserPage.scss'

import PageContainer from '../../components/PageContainer/PageContainer'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import AccountCard from '../../components/AccountCard/AccountCard'

const UserPage = () => {
  return (
    <PageContainer title='Profile'>
      <ProfileHeader userName="Tony Jarvis"/>
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
