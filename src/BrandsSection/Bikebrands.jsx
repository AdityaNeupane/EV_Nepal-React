import React from 'react'
import './Bikebrands.css'
import {IoIosSearch} from 'react-icons/io'
import yatrilogo from '../assets/bike-logo/yatrilogo.jpg'
import supersocologo from '../assets/bike-logo/supersocologo.png'
const Bikebrands = () => {
  return (
    <>
    <div className='bike-brands'>
    <h1 className='bikes-heading'> Available Electric Bike Brands in Nepal - <u>' 2 wheeler '</u> </h1>

    <div className='input2'>
      <input />
      <span className='search-icon2'><IoIosSearch /></span>
    </div>

     <div className='bike-album'>
       <img src= {yatrilogo} alt="yatrilogo" />
       <img src= {supersocologo} alt="supersocologo" />
       </div>

    </div>
    
    </>
  )
}


export default Bikebrands
