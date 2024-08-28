import React from 'react'
import './Pricescooters.css'
import Scotypriceone from '../scooterPricelist/Scotypriceone'
import Scotypricetwo from '../scooterPricelist/Scotypricetwo'
import Scotypricethree from '../scooterPricelist/Scotypricethree'
import Scotypricefour from '../scooterPricelist/Scotypricefour'
import Scotypricefive from '../scooterPricelist/Scotypricefive'
import Scotypricesix from '../scooterPricelist/Scotypricesix'
const Pricescooters = () => {
  return (
     <>
     <div className="pricescooters">

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
