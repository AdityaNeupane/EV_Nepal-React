import React from 'react';
import './Headingbike.css';
 import doubleunderline5 from '../assets/underlines/doubleunderline5.png';
 import backarrow2 from '../assets/icons/backarrow2.png';
const Headingbike = () => {
  return (
     <>
     
     <div className='head-bike'>

   <h1 className='heading-bike  '>latest prices of Electric bikes available in the market</h1>
     <img src={doubleunderline5} alt="doubleunderline5" className='doubleunderline6 '/>

     <button onClick={() => window.history.back()}  >
            <img src={backarrow2} alt="backarrow2" className="back-buttonbike"/> 
          </button>
     </div>
     
     </>
  )
}

export default Headingbike;
