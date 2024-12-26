import React from 'react'
import './Banner.css'
import Banner_image from '../../assets/christmas_desktop@1x.png'
function Banner() {
  return (
    <div className="banner">
        <div className="banner-image">
            <img src={Banner_image} alt="" />
        </div>
        <div className="banner-slot">

        </div>
    </div>
  )
}

export default Banner