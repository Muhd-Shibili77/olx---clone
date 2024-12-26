import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import LastBanner from '../../components/LastBanner/LastBanner'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
      <div>
        <Navbar/>
        <Banner/>
        <Products/>
        <LastBanner/>
        <Footer/>
    </div>
  )
}

export default Home