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
 import doubleunderline2 from '../assets/underlines/doubleunderline2.png'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'
const Vanbrands = () => {
  return (
    <>
    {/* <Mynavbar /> */}
    <div className="van-brands">
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback" className="back-button5" />
          </button>
      <h1 className='van-heading effect3d'>Available Electric Passenger-Van Brands in Nepal</h1>
      <img src={doubleunderline2} alt="doubleunderline2" className="doubleunderline5" />
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




    </div>
    {/* <Footer /> */}
    {/* <Copyright /> */}
    </>
  )
}

export default Vanbrands
