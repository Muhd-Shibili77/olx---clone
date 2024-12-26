import React from 'react'
import  './Sellnav.css'
import arrow from '../../assets/arrowleft.png'
import { useNavigate } from 'react-router-dom';

function Sellnav() {
    const navigate = useNavigate()

    const handleGoBack = ()=>{
        navigate('/')
    }

  return (
    <div className="nav">
        <img src={arrow} onClick={handleGoBack} alt="arrow" />
    </div>
  )
}

export default Sellnav