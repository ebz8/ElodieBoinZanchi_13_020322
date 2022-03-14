import MainNav from '../MainNav/MainNav'
import Footer from '../Footer/Footer'

import { useEffect } from 'react'

const PageContainer = ({children, title}) => {

  // to always have the correct meta title 
  useEffect( () => {
    document.title=`${title} | Argent Bank`
    window.scrollTo(0,0)
  }, [title])

  return (
    <>
      <MainNav />
        <main className={`${title.toLowerCase()}-content`}>{children}</main>
      <Footer />
    </>
  )
}

export default PageContainer
