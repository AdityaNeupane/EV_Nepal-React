import React from 'react'
import './Headingvan.css'
import backarrow2 from '../assets/icons/backarrow2.png' 
import doubleunderline5 from '../assets/underlines/doubleunderline5.png'

const Headingvan = () => {
  return (
     <>
     
     <div className="head-van">


    <h1 className="heading-van animate__animated animate__slideInDown ">latest prices of Electric Passenger vans available in the market</h1>
    <img src={doubleunderline5} alt="doubleunderline5" className="doubleunderline8 animate__animated animate__slideInRight"/>


    <button onClick={() => window.history.back()}  >
      <img src={backarrow2} alt="backarrow" className="back-buttonvan"/> 
    </button>

     </div>
     
     
     </>
  )
}

export default Headingvan
