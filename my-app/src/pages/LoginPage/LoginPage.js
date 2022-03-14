import './LoginPage.scss'

import PageContainer from '../../components/PageContainer/PageContainer'
import SignInForm from '../../components/Forms/SignInForm/SignInForm'

/**
 * Authentication page with associated form
 * Automatic forwarding to this page when access attempt by a non-logged-in user
 * @returns {ReactElement}
 */
const LoginPage = () => {
  return (
    <PageContainer title='Login'>
      <SignInForm />
    </PageContainer>
  )
}

export default LoginPage
