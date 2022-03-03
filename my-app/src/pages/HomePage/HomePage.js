import './HomePage.scss'
import BannerImg from '../../assets/img/bank-tree.jpeg'

import PageContainer from '../../components/PageContainer/PageContainer'
import Banner from '../../components/Banner/Banner'
import FeaturesContainer from '../../components/FeaturesContainer/FeaturesContainer'

const HomePage = () => {
  return (
    <PageContainer title='Home'>
      <Banner imgSrc={BannerImg}/>
      <FeaturesContainer/>
    </PageContainer>
  )
}

export default HomePage
