import React from 'react'
import './Bikebrands.css'
import {IoIosSearch} from 'react-icons/io'
import yatrilogo from '../assets/bike-logo/yatrilogo.jpg'
import supersocologo from '../assets/bike-logo/supersocologo.png'
import Footer from '../pages/Footer'
import Mynavbar from '../components/Mynavbar'
import turnback from '../assets/icons/turnback.png'
 import doubleunderline2 from '../assets/underlines/doubleunderline2.png'
 import Copyright from '../pages/Copyright'
const Bikebrands = () => {
  return (
    <>
    
  <Mynavbar />
    <div className='bike-brands'>
          <button onClick={() => window.history.back()}>
            <img src={turnback} alt="turnback"  className='back-button3'/>
          </button>
    <h1 className='bikes-heading effect3d'> Available Electric Bike Brands in Nepal- "2 wheeler" </h1>
    <img src={doubleunderline2} alt="doubleunderline" className='doubleunderline2 ' />
        <div className='input2'>
      <input />
      <span className='search-icon2'><IoIosSearch /></span>
    </div>

     <div className='bike-album'>
       <img src= {yatrilogo} alt="yatrilogo" />
       <img src= {supersocologo} alt="supersocologo" />
       </div>
 

    </div>
    <Footer/>
    <Copyright/>
    </>
  )
}


export default Bikebrands
