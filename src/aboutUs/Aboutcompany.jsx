import React from 'react'
import './Aboutcompany.css'
import illustration5 from '../assets/illustrations/illustration5.png';
import person from '../assets/icons/person.png';
const Aboutcompany = () => {
  return (
     <>
      
     <div className='about-company'>

      <div className='about-leftbox '>
        <img src={illustration5} alt="illustration5" />
      </div>
      
      <div className='about-rightbox'>
        <div className='about-upperrightbox'>
          <h1 className='about-upperrightboxheading animate__animated  animate__bounceInDown'>About EV Nepal</h1>
          <img src={person} alt="person" className='animate__animated   animate__bounceInRight' />
        </div>
        <div className='about-lowerrightbox'>
          <h1 className='about-lowerrightboxheading animate__animated  animate__bounceInUp'>Established in 2024, EV Nepal is your ultimate destination for everything related to electric vehicles. We are committed to providing comprehensive information on EV prices, various types of available and up-coming electric vehicles, nearby charging stations, and many more. As a one-stop destination for EV, our goal is to empower consumers and promote the adoption of eco-friendly transportation across the country. At EV Nepal, we strive to make the transition to electric mobility as seamless and informed as possible. </h1>
        </div>
      </div>

     </div>
     </>
  )
}

export default Aboutcompany
