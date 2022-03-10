import './ErrorsPage.scss'
import PageContainer from "../../components/PageContainer/PageContainer"
import { Link } from 'react-router-dom'

function ErrorsPage({errorCode}) {
  return (
    <PageContainer title='Oops'>
      <p className='error-message'>Sorry, we can't find that page.</p>
      <Link to='/'> Back to Homepage </Link>
      <p className='error-code'>ErrorCode : errorCode</p>
    </PageContainer>
  )
}

export default ErrorsPage
