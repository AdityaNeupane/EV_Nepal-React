import React from 'react'
import './Head.css'
import headingbg4 from '../assets/Background-images/headingbg4.jpg'
import divider5 from '../assets/underlines/divider5.png'
const Head = () => {
  return (
     <>
     
     <div className='aboutus'>
      <img src={divider5} alt='divider5' />
           <div className='image-container'>
        <img src={headingbg4} alt='headingbg4'  className='aboutus-img'/>
        <h1 className='about-heading'>About Us</h1>
        <h2 className='about-subheading geologica-head'>Home  -  About Us</h2>
        </div>
        </div>
        
     </>
  )
}

export default Head
