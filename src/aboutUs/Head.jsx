import React from 'react'
import './Head.css'
import headingbg4 from '../assets/Background-images/headingbg4.jpg'
const Head = () => {
  return (
     <>
     
     <div className='aboutus'>
           <div className='image-container'>
        <img src={headingbg4} alt='headingbg4' />
        <h1 className='about-heading'>ABOUT US</h1>
        <h2 className='about-subheading'>Home  -  About Us</h2>
        </div>
        </div>
     
     </>
  )
}

export default Head
