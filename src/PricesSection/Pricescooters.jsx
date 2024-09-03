import React from 'react'
 
import Scotypriceone from '../scooterPricelist/Scotypriceone'
import Scotypricetwo from '../scooterPricelist/Scotypricetwo'
import Scotypricethree from '../scooterPricelist/Scotypricethree'
import Scotypricefour from '../scooterPricelist/Scotypricefour'
import Scotypricefive from '../scooterPricelist/Scotypricefive'
import Scotypricesix from '../scooterPricelist/Scotypricesix'
import Headingscooter from '../headingPrice/Headingscooter'
const Pricescooters = () => {
  return (
     <>
     <div className="pricescooters">

     <Headingscooter />
     <Scotypriceone />
     <Scotypricetwo />
     <Scotypricethree />
     <Scotypricefour />
     <Scotypricefive />
     <Scotypricesix />

     </div>
     </>
  )
}

export default Pricescooters
