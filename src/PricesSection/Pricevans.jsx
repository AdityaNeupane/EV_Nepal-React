import React from 'react'
import './Pricevans.css'
import Vanspriceone from '../vansPricelist/Vanspriceone'
import Vanspricetwo from '../vansPricelist/Vanspricetwo'
import Vanspricethree from '../vansPricelist/Vanspricethree'
import Vanspricefour from '../vansPricelist/Vanspricefour'
import Vanspricefive from '../vansPricelist/Vanspricefive'
import Headingvan from '../headingPrice/Headingvan'
import Vanspricesix from '../vansPricelist/Vanspricesix'
const Pricevans = () => {
  return (
     <>
     <div className="pricevans"> 


    <Headingvan/>
     <Vanspriceone/>
     <Vanspricetwo/>
     <Vanspricethree/>
     <Vanspricefour/>
     <Vanspricefive/>
     <Vanspricesix/>

     </div>
     
     </>
  )
}

export default Pricevans
