import React from 'react'
import './Whatwedo.css'
import headingbg4  from '../assets/Background-images/headingbg4.jpg'
import news from '../assets/icons/news.png'
import calc from '../assets/icons/calc.png'
import listing from '../assets/icons/listing.png'
import expert from '../assets/icons/expert.png'
import charging from '../assets/icons/charging.png'
import brand from '../assets/icons/brand.png'
import pricing from '../assets/icons/pricing.png'
import reviews from '../assets/icons/reviews.png'

const Whatwedo = () => {
  return (
     <>
     <div className="whatwedo">
      
      <div className="whatwedo-image">
        <img src={headingbg4}   alt="headingbg4" />
        <h1 className='whatwedo-heading'>what we do</h1>
      </div>

      <div className="upper-box">
      
        <div className="upper-left">
          <img src={news} alt="news" />
         <h1 className='upper-left-heading'> Latest News and Updates</h1>
         <p className='upper-left-para'>   Stay updated with the latest news, government policies, and advancements in the electric vehicle industry in Nepal.  </p>
        </div>

        <div className="upper-middle">
          <img src={calc} alt="calc" />
        <h1 className='upper-middle-heading'> EMI Calculator</h1>
        <p className='upper-middle-para'> A user-friendly EMI calculator to estimate monthly payments for purchasing electric vehicles, tailored to fit different budgetary needs.</p>
        </div>

        <div className="upper-right">
          <img src={listing} alt="listing" />
       <h1 className='upper-right-heading'> Comprehensive EV Listings </h1>
       <p className='upper-right-para'>   Detailed information on all available electric vehicles in Nepal,   with specifications, features, and pricing.   </p>
        </div>

        </div>
       
      <div className="middle-box">

        <div className="middle-left">
        <img src={expert} alt="experts" />
        <h1 className='middle-left-heading'>Consult with Our Experts </h1>
        <p className='middle-left-para'>    A dedicated service where customers can call our experienced professionals to receive personalized advice on selecting the right electric vehicle based on their needs, preferences, and budget.   </p>
        </div>

        <div className="middle-right">
          <img src={charging} alt="charging" />
     <h1 className='middle-right-heading'> Nearby Charging Stations Locator </h1>
     <p className='middle-right-para'>  A map-based feature to find nearby EV charging stations, ensuring that users can easily charge their vehicles anywhere in Nepal.  </p>
        </div>

        </div>

       <div className="lower-box">

        <div className="lower-left">
          <img src={brand} alt="brand" />
     <h1 className='lower-left-heading'>Brand Exploration </h1>
     <p className='lower-left-para'> A dedicated section to explore different brands offering electric vehicles in Nepal, making it easier for users to compare and choose the best option.  </p>
        </div>

        <div className="lower-middle">
          <img src={pricing} alt="pricing" />
      <h1 className='lower-middle-heading'> Price Comparison Tool </h1>
      <p className='lower-middle-para'>  A tool to compare the prices of different electric vehicles side-by-side, helping users make informed purchasing decisions.   </p>
        </div>

        <div className="lower-right">
          <img src={reviews} alt="review" />
     <h1 className='lower-right-heading'>   Expert Reviews and Ratings </h1>
     <p className='lower-right-para'> In-depth reviews and ratings from experts and users to provide insights into the performance and reliability of different electric vehicles.   </p>
        </div>

        </div>

        </div>
     
     </>
  )
}

export default Whatwedo
