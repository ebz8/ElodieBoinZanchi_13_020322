import './ErrorsPage.scss'
import PageContainer from "../../components/PageContainer/PageContainer"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * Error page including personalized message according to global error state (sent by backend)
 * @returns {ReactElement}
 */
function ErrorsPage() {
  const { authError, connected } = useSelector((state) => state.auth)
  const { userDataError } = useSelector((state) => state.user)

  return (
    <PageContainer title='Oops'>
      <p className='error-message'>Sorry, we can't find that page.</p>
      {connected ? <Link to='/profile'> Go back to my profile </Link>
      : <Link to='/'> Go back to Homepage </Link>}
      {authError ? <p className='error-code'>ErrorCode: {authError}</p>
      : userDataError ? <p className='error-code'>ErrorCode: {userDataError}</p>
      : <p className='error-code'>This link might be invalid or the page might have been deleted. Check whether the link you are trying to open is correct.</p>}
    </PageContainer>
  )
}

export default ErrorsPage
