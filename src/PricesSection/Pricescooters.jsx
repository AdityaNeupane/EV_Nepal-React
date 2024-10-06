import React from 'react'
 
import Scotypriceone from '../scooterPricelist/Scotypriceone'
import Scotypricetwo from '../scooterPricelist/Scotypricetwo'
import Scotypricethree from '../scooterPricelist/Scotypricethree'
import Scotypricefour from '../scooterPricelist/Scotypricefour'
import Scotypricefive from '../scooterPricelist/Scotypricefive'
import Scotypricesix from '../scooterPricelist/Scotypricesix'
import Headingscooter from '../headingPrice/Headingscooter'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'
const Pricescooters = () => {
  return (
     <>
     <Mynavbar />
     <div className="pricescooters">

     <Headingscooter />
     <Scotypriceone />
     <Scotypricetwo />
     <Scotypricethree />
     <Scotypricefour />
     <Scotypricefive />
     <Scotypricesix />

     </div>
     
     <Footer />
     <Copyright/>
     </>
  )
}

export default Pricescooters
