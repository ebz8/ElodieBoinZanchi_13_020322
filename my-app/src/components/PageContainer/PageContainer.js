import MainNav from '../MainNav/MainNav'
import Footer from '../Footer/Footer'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Loader from "../Loader/Loader"

const PageContainer = ({children, title}) => {
  const { loading } = useSelector((state) => state.auth)
  const { loadingData } = useSelector((state) => state.user)

  // to always have the correct meta title 
  useEffect( () => {
    document.title=`${title} | Argent Bank`
    window.scrollTo(0,0)
  }, [title])

  return (
    <>
      <MainNav />
      {loading || loadingData ? <Loader/>
      : <main className={`${title.toLowerCase()}-content`}>{children}</main>
      }
      <Footer />
    </>
  )
}

export default PageContainer
