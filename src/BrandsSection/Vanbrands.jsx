import React from 'react'
 import './Vanbrands.css'
 import {IoIosSearch} from 'react-icons/io'
 import fotonlogo from '../assets/van-logo/fotonlogo.png'
 import kinglonglogo from '../assets/van-logo/kinglonglogo.png'
 import kyclogo from '../assets/van-logo/kyclogo.png'
 import sokonlogo from '../assets/van-logo/sokonlogo.png'
 import srmlogo from '../assets/van-logo/srmlogo.png'
 import wulinglogo from '../assets/van-logo/wulinglogo.png'

 import turnback from '../assets/icons/turnback.png'
 import uparrow from '../assets/icons/uparrow.png'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
const Vanbrands = () => {
  return (
    <>
    <Mynavbar />
    <div className="van-brands">
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback" className="back-button5" />
          </button>
      <h1 className='van-heading'>Available Electric Passenger-Van Brands in Nepal</h1>
      
      <div className='input4'>
        <input />
        <span className='search-icon4'><IoIosSearch /></span>
      </div>

      <div className='van-album'>
       <img src= {fotonlogo} alt="fotonlogo" />
       <img src= {kinglonglogo} alt="kinglonglogo" />
       <img src= {kyclogo} alt="kyclogo" />
       <img src= {sokonlogo} alt="sokonlogo" />
       <img src= {srmlogo} alt="srmlogo" />
       <img src= {wulinglogo} alt="wulinglogo" />
      </div>

     <button onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
       <img src={uparrow} alt='uparrow' className='uparrow5'/>
     </button>


    </div>
    <Footer />
    </>
  )
}

export default Vanbrands
