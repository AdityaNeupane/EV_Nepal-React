import React from 'react'
import './Headingcar.css'
import backarrow2 from '../assets/icons/backarrow2.png'
import doubleunderline5 from '../assets/underlines/doubleunderline5.png'

const Headingcar = () => {
  return (
     <>
     
     <div className='head-car'>
   
     <h1 className='heading-car animate__animated animate__slideInDown '>latest prices of Electric Cars available in the market</h1>

       <img src={doubleunderline5} alt="doubleunderline5" className='doubleunderline5 animate__animated animate__slideInRight'/>

     <button onClick={() => window.history.back()}  >
            <img src={backarrow2} alt="backarrow" className="back-buttoncar"/> 
          </button>
 
          

      </div>
     
     
     </>
  )
}

export default Headingcar
