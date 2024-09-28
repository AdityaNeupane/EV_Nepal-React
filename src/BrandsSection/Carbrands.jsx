import React from 'react'
import './Carbrands.css'
import {IoIosSearch} from 'react-icons/io'
import BYDlogo from '../assets/car-logo/BYDlogo.png'
import citroenlogo from '../assets/car-logo/citroenlogo.png'
import gaclogo from '../assets/car-logo/gaclogo.png'
import gwmlogo from '../assets/car-logo/gwmlogo.png'
import MGlogo from '../assets/car-logo/MGlogo.png'
import tatalogo from '../assets/car-logo/tatalogo.png'
import teslalogo from '../assets/car-logo/teslalogo.png'
import hyundailogo from '../assets/car-logo/hyundailogo.png'
import mahindralogo from '../assets/car-logo/mahindralogo.png'
import netalogo from '../assets/car-logo/netalogo.png'
import nissanlogo from '../assets/car-logo/nissanlogo.png'
import deepallogo from '../assets/car-logo/deepallogo.png'
import sereslogo from '../assets/car-logo/sereslogo.png'
import omadalogo from '../assets/car-logo/omadalogo.png'

import turnback from '../assets/icons/turnback.png'
 import doubleunderline2 from '../assets/underlines/doubleunderline2.png'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'

const Carbrands = () => {
  return (
     <>
     <Mynavbar />
     
     <div className='car-brands'>
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback" className="back-button2"/> 
          </button>
     <h1 className='car-heading effect3d'>Available Electric Car Brands in Nepal- "4 wheeler" </h1>
     <img src={doubleunderline2} alt="doubleunderline" className='doubleunderline3'/>
      <div className='input1'>
        <input />
        <span className='search-icon1'><IoIosSearch /></span>
      </div>
      
    <div className='car-album'>
       <img src= {BYDlogo} alt="BYDlogo" />
       <img src= {citroenlogo} alt="citroenlogo" />
       <img src= {gaclogo} alt="gaclogo" />
       <img src= {gwmlogo} alt="gwmlogo" />
       <img src= {MGlogo} alt="MGlogo" />
       <img src= {tatalogo} alt="tatalogo" />
       <img src= {teslalogo} alt="teslalogo" />
       <img src= {hyundailogo} alt="hyundailogo" />
       <img src= {mahindralogo} alt="mahindralogo" />
       <img src= {netalogo} alt="netalogo" />
       <img src= {nissanlogo} alt="nissanlogo" />
       <img src= {deepallogo} alt="deepallogo" />
       <img src= {sereslogo} alt="sereslogo" />
       {/* <img src= {omadalogo} alt="omadalogo" /> */}
    </div>
    
    <div className='car-omada'>
      <img src= {omadalogo} alt="omadalogo" />
    </div>
    
  


   </div>
   <Footer />
     </>
  )
}
export default Carbrands
