import React from 'react'
import './Headingcar.css'
import headingbg1 from '../assets/Background-images/headingbg1.png'
const Headingcar = () => {
  return (
     <>
     
     <div className='head-car'>
      
       <div className='image-container1'> 
        <img src={headingbg1} alt="headingbg1"   />
         <h1 className='head-car-heading'>Welcome to the latest prices of every Electric Car Brand's available in the country.</h1>
      </div>

      </div>
     
     
     </>
  )
}

export default Headingcar
