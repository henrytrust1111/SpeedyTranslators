import React from 'react'
import HeroPage from './heroPage/HeroPage'
import GetStarted from './getStarted/GetStarted'
import ScrollToTop from '../scrollToTop/ScrollToTop'
import FistCard from './firstCard/FirstCard'

const LandingPage = () => {
  return (
    <>
    <ScrollToTop />
    <HeroPage />
    <FistCard />
    <GetStarted />
    </>
  )
}

export default LandingPage