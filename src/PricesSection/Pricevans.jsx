import React from 'react'
 
import Vanspriceone from '../vansPricelist/Vanspriceone'
import Vanspricetwo from '../vansPricelist/Vanspricetwo'
import Vanspricethree from '../vansPricelist/Vanspricethree'
import Vanspricefour from '../vansPricelist/Vanspricefour'
import Vanspricefive from '../vansPricelist/Vanspricefive'
import Headingvan from '../headingPrice/Headingvan'
import Vanspricesix from '../vansPricelist/Vanspricesix'

import Mynavbar from '../components/Mynavbar'
import Footer from '../pages/Footer'
import Copyright from '../pages/Copyright'
const Pricevans = () => {
  return (
     <>
     <Mynavbar />
     <div className="pricevans"> 


    <Headingvan/>
     <Vanspriceone/>
     <Vanspricetwo/>
     <Vanspricethree/>
     <Vanspricefour/>
     <Vanspricefive/>
     <Vanspricesix/>
     
     </div>
     <Footer />
     <Copyright/>
     </>
  )
}

export default Pricevans
