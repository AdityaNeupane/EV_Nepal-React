import React from 'react'
 
 import Bikepriceone from '../bikePricelist/Bikepriceone' 
 import Bikepricetwo from  '../bikePricelist/Bikepricetwo'
 import Headingbike from '../headingPrice/Headingbike'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'

const Pricebikes = () => {
  return (
    <>
    <Mynavbar/>
    <div className="pricebikes">
    
    <Headingbike/>
    
     <Bikepriceone/>
     <Bikepricetwo/>
    <Footer/>
    <Copyright />

    </div>
    
    </>
  )
}

export default Pricebikes
