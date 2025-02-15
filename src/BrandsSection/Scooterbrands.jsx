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
 import doubleunderline2 from '../assets/underlines/doubleunderline2.png'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'
const Scooterbrands = () => {
  return (
    <>
    {/* <Mynavbar/> */}
    <div className="Scooterbrands">
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback" className="back-button4" />
          </button>
    <h1 className='scooter-heading effect3d'>Available Electric Scooter Brands in Nepal- "2 wheeler"</h1>
    <img src={doubleunderline2} alt="doubleunderline" className='doubleunderline4' />
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



    </div>
    {/* <Footer /> */}
    {/* <Copyright /> */}
    </>
  )
}

export default Scooterbrands
