import React from 'react'
import './Scooterbrands.css'
import {IoIosSearch} from 'react-icons/io'
import atherlogo from '../assets/scooter-logo/atherlogo.png'
import ecobitlogo from '../assets/scooter-logo/ecobitlogo.png'
 import niulogo from '../assets/scooter-logo/niulogo.png'
import segwaylogo from '../assets/scooter-logo/segwaylogo.png'
import supersocologo from '../assets/scooter-logo/supersocologo.png'
import yadealogo from '../assets/scooter-logo/yadealogo.png'
import turnback from '../assets/icons/turnback.png'
import uparrow from '../assets/icons/uparrow.png'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
const Scooterbrands = () => {
  return (
    <>
    <Mynavbar/>
    <div className="Scooterbrands">
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback" className="back-button4" />
          </button>
    <h1 className='scooter-heading'>Available Electric Scooter Brands in Nepal-' 2 wheeler '</h1>
    
     <div className='input3'>
      <input />
      <span className='search-icon3'><IoIosSearch /></span>
     </div>
      
      <div className='scooter-album'>
        <img src= {atherlogo} alt="atherlogo" />
        <img src= {ecobitlogo} alt="ecobitlogo" />
        <img src= {niulogo} alt="niulogo" />
        <img src= {segwaylogo} alt="segwaylogo" />
        <img src= {supersocologo} alt="supersocologo" />
        <img src= {yadealogo} alt="yadealogo" />
        </div>

    <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
      <img src={uparrow} alt="uparrow" className="uparrow4" />
    </button>

    </div>
    <Footer />
    </>
  )
}

export default Scooterbrands
