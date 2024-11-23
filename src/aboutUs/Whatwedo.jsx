import React from 'react'
import './Whatwedo.css'
 
import news from '../assets/icons/news.png'
import calc from '../assets/icons/calc.png'
import listing from '../assets/icons/listing.png'
import expert from '../assets/icons/expert.png'
import charging from '../assets/icons/charging.png'
import brand from '../assets/icons/brand.png'
import pricing from '../assets/icons/pricing.png'
import reviews from '../assets/icons/reviews.png'

import needleunderline5 from '../assets/underlines/needleunderline5.png';

const Whatwedo = () => {
  return (
     <>
     <div className="whatwedo">
     
      <h1 className='whatwedo-heading geologica-whatwedo'>What we do / Services</h1>
      <img src={needleunderline5} alt='underline' className='whatwedo-underline'></img>

      <div className="upper-box">
      
        <div className="upper-left animate__animated animate__fadeInLeft">
          <img src={news} alt="news" className='animate__animated animate__swing' />
         <h1 className='upper-left-heading animate__animated animate__bounceIn geologica-whatwedo'> Latest News and Updates</h1>
         <p className='upper-left-para animate__animated animate__fadeInUp geologica-whatwedo'>   Stay updated with the latest news, government policies, and advancements in the electric vehicle industry in Nepal.  </p>
        </div>

        <div className="upper-middle animate__animated animate__fadeInDown">
          <img src={calc} alt="calc"  className='animate__animated animate__swing'/>
        <h1 className='upper-middle-heading animate__animated animate__bounceIn geologica-whatwedo'> EMI Calculator</h1>
        <p className='upper-middle-para animate__animated animate__fadeInUp geologica-whatwedo'> A user-friendly EMI calculator to estimate monthly payments for purchasing electric vehicles, tailored to fit different budgetary needs.</p>
        </div>

        <div className="upper-right animate__animated animate__fadeInRight">
          <img src={listing} alt="listing" className='animate__animated animate__swing' />
       <h1 className='upper-right-heading animate__animated animate__bounceIn geologica-whatwedo'> Comprehensive EV Listings </h1>
       <p className='upper-right-para animate__animated animate__fadeInUp geologica-whatwedo'>   Detailed information on all available electric vehicles in Nepal,   with specifications, features, and pricing.   </p>
        </div>

        </div>
       
      <div className="middle-box">

        <div className="middle-left animate__animated animate__fadeInLeft">
        <img src={expert} alt="experts" className='animate__animated animate__swing' />
        <h1 className='middle-left-heading animate__animated animate__bounceIn geologica-whatwedo'>Consult with Our Experts </h1>
        <p className='middle-left-para animate__animated animate__fadeInUp geologica-whatwedo'>    A dedicated service where customers can call our experienced professionals to receive personalized advice on selecting the right electric vehicle based on their needs, preferences, and budget.   </p>
        </div>

        <div className="middle-right animate__animated animate__fadeInRight">
          <img src={charging} alt="charging" className='animate__animated animate__swing' />
     <h1 className='middle-right-heading animate__animated animate__bounceIn geologica-whatwedo'> Nearby Charging Stations Locator </h1>
     <p className='middle-right-para animate__animated animate__fadeInUp geologica-whatwedo'>  A map-based feature to find nearby EV charging stations, ensuring that users can easily charge their vehicles anywhere in Nepal.  </p>
        </div>

        </div>

       <div className="lower-box">

        <div className="lower-left animate__animated animate__fadeInLeft">
          <img src={brand} alt="brand" className='animate__animated animate__swing' />
     <h1 className='lower-left-heading animate__animated animate__bounceIn geologica-whatwedo'>Brand Exploration </h1>
     <p className='lower-left-para animate__animated animate__fadeInUp geologica-whatwedo'> A dedicated section to explore different brands offering electric vehicles in Nepal, making it easier for users to compare and choose the best option.  </p>
        </div>

        <div className="lower-middle animate__animated animate__fadeInUp" >
          <img src={pricing} alt="pricing" className='animate__animated animate__swing' />
      <h1 className='lower-middle-heading animate__animated animate__bounceIn geologica-whatwedo'> Price Comparison Tool </h1>
      <p className='lower-middle-para animate__animated animate__fadeInUp geologica-whatwedo'>  A tool to compare the prices of different electric vehicles side-by-side, helping users make informed purchasing decisions.   </p>
        </div>

        <div className="lower-right animate__animated animate__fadeInRight">
          <img src={reviews} alt="review"  className='animate__animated animate__swing'/>
     <h1 className='lower-right-heading animate__animated animate__bounceIn geologica-whatwedo'>   Expert Reviews and Ratings </h1>
     <p className='lower-right-para animate__animated animate__fadeInUp geologica-whatwedo'> In-depth reviews and ratings from experts and users to provide insights into the performance and reliability of different electric vehicles.   </p>
        </div>

        </div>

        </div>
     
     </>
  )
}

export default  Whatwedo
