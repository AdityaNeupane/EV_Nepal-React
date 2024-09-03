import React from 'react'
 
 import Bikepriceone from '../bikePricelist/Bikepriceone' 
 import Bikepricetwo from  '../bikePricelist/Bikepricetwo'
 import Headingbike from '../headingPrice/Headingbike'

const Pricebikes = () => {
  return (
    <>
    <div className="pricebikes">
    
    <Headingbike/>
     <Bikepriceone/>
     <Bikepricetwo/>


    </div>
    
    </>
  )
}

export default Pricebikes
