import React from 'react'
import Header from '../../components/HomeComponents/HeaderSection'
import Trending from '../../components/HomeComponents/TrendingSection'
import WinterSales from '../../components/HomeComponents/WinterSaleSection'
import BestSeller from '../../components/HomeComponents/BestSellerSection'
import LatestNews from '../../components/HomeComponents/LatestNews'

const HomePage = () => {
  return (
    <>
      <Header/> 
      <Trending/> 
      <WinterSales/>
      <BestSeller/>
      <LatestNews/>
    </>
  )
}

export default HomePage