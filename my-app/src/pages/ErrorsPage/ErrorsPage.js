import './ErrorsPage.scss'
import PageContainer from "../../components/PageContainer/PageContainer"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

/**
 * Error page including personalized message according to global error state (sent by backend)
 * @returns {ReactElement}
 */
function ErrorsPage() {
  const { authError } = useSelector((state) => state.auth)

  return (
    <PageContainer title='Oops'>
      <p className='error-message'>Sorry, we can't find that page.</p>
      <Link to='/'> Back to Homepage </Link>
      {authError ? <p className='error-code'>ErrorCode : {authError}</p>
      : <p className='error-code'>ErrorCode : errorCode</p>}
    </PageContainer>
  )
}

export default ErrorsPage
