import React from 'react'
import './Headingscooter.css'
import   backarrow2 from '../assets/icons/backarrow2.png'
import doubleunderline5 from '../assets/underlines/doubleunderline5.png'

const Headingscooter = () => {
  return (
     <>
     
     <div className='head-scooter'>
    <h1 className='heading-scooter  '>latest prices of Electric Scooters available in the market</h1>
    <img src={doubleunderline5} alt="doubleunderline5" className='doubleunderline7    '/>

    <button onClick={() => window.history.back()}  >
            <img src={backarrow2} alt="backarrow2" className="back-buttonscooter"/> 
          </button>
     

     </div>
     
     
     </>
  )
}

export default Headingscooter
