import React from 'react'
 
import PriceListone from '../carsPricelist/PriceListone'
import Pricelisttwo from '../carsPricelist/PriceListtwo'
import PriceListthree from '../carsPricelist/PriceListthree'
import PriceListfour from '../carsPricelist/PriceListfour'
import PriceListfive from '../carsPricelist/PriceListfive'
import PriceListsix from '../carsPricelist/PriceListsix'
import PriceListseven from '../carsPricelist/PriceListseven'
import PriceListeight from '../carsPricelist/PriceListeight'
import PriceListnine from '../carsPricelist/PriceListnine'
import PriceListten from '../carsPricelist/PriceListten'
import PriceListeleven from '../carsPricelist/PriceListeleven'
import PriceListtwelve from '../carsPricelist/PriceListtwelve'
import Headingcar from '../headingPrice/Headingcar'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'
const Pricecars = () => {
  return (
     <>
     <Mynavbar/>
     <div className='pricecars'>
     

     <Headingcar/>
     <PriceListone/>
     <Pricelisttwo/>
     <PriceListthree/>
     <PriceListfour/>
     <PriceListfive/>
     <PriceListsix/>
     <PriceListseven/>
     <PriceListeight/>
     <PriceListnine/>
     <PriceListten/>
     <PriceListeleven/>
     <PriceListtwelve/>
     </div>
     </>
  )
}

export default Pricecars
