import React from 'react'
import './Pricebikes.css'
 import Bikepriceone from '../bikePricelist/Bikepriceone' 
 import Bikepricetwo from  '../bikePricelist/Bikepricetwo'

const Pricebikes = () => {
  return (
    <>
    <div className="pricebikes">
    
     <Bikepriceone/>
     <Bikepricetwo/>


    </div>
    
    </>
  )
}

export default Pricebikes
