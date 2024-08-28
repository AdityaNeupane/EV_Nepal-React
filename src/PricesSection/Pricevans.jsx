import React from 'react'
import './Pricevans.css'
import Vanspriceone from '../vansPricelist/Vanspriceone'
import Vanspricetwo from '../vansPricelist/Vanspricetwo'
import Vanspricethree from '../vansPricelist/Vanspricethree'
import Vanspricefour from '../vansPricelist/Vanspricefour'
import Vanspricefive from '../vansPricelist/Vanspricefive'
import Vanspricesix from '../vansPricelist/Vanspricesix'
const Pricevans = () => {
  return (
     <>
     <div className="pricevans"> 

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
