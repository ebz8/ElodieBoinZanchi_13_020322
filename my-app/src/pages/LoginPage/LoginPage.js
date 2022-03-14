import './LoginPage.scss'

import PageContainer from '../../components/PageContainer/PageContainer'
import SignInForm from '../../components/Forms/SignInForm/SignInForm'


const LoginPage = () => {
  return (
    <PageContainer title='Login'>
      <SignInForm />
    </PageContainer>
  )
}

export default LoginPage
