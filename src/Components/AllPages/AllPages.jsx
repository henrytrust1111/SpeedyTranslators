import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Header from '../LandingPage/header/Header'
import Footer from '../LandingPage/footer/Footer'
import { Outlet } from 'react-router-dom'

const AllPages = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AllPages