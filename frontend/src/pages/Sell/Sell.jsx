import React from 'react'
import './Sell.css'
import Sellnav from '../../components/SellNav/SellNav'
import Selllist from '../../components/Selllist/Selllist'
import Footer from '../../components/Footer/Footer'

function Sell() {
  return (
    <>
      <Sellnav />
      <Selllist />
      <Footer />
    </>
  )
}

export default Sell