import React from 'react'
import './Vehicle.css'

 import BYDlogo from '../assets/car-logo/BYDlogo.png'
 import citroenlogo from '../assets/car-logo/citroenlogo.png'
 import gaclogo from '../assets/car-logo/gaclogo.png'
 import gwmlogo from '../assets/car-logo/gwmlogo.png'
 import MGlogo from '../assets/car-logo/MGlogo.png'
 import tatalogo from '../assets/car-logo/tatalogo.png'
 import teslalogo from '../assets/car-logo/teslalogo.png'
 import hyundailogo from '../assets/car-logo/hyundailogo.png'
 import mahindralogo from '../assets/car-logo/mahindralogo.png'
 import netalogo from '../assets/car-logo/netalogo.png'
 import nissanlogo from '../assets/car-logo/nissanlogo.png'
 import deepallogo from '../assets/car-logo/deepallogo.png'

import atherlogo from '../assets/scooter-logo/atherlogo.png'
import ecobitlogo from '../assets/scooter-logo/ecobitlogo.png'
 import niulogo from '../assets/scooter-logo/niulogo.png'
 import segwaylogo from '../assets/scooter-logo/segwaylogo.png'
 import supersocologo from '../assets/scooter-logo/supersocologo.png'
 import yadealogo from '../assets/scooter-logo/yadealogo.png'

 import yatrilogo from '../assets/bike-logo/yatrilogo.jpg'
//  import supersocologo from '../assets/bike-logo/supersocologo.png'

const Vehicle = () => {
  return (
     <>
     <div className='vehicle-section'>
     
     <h1 className='maintopic'>' Available Electric Vehicle Brands In Nepal '</h1>
      <br></br>
      <br></br>
      <br></br>
      
      <h3 className='topic1'>Electric Cars</h3>
      <br></br>
      <div className='car-album'>

       <img src= {BYDlogo} alt="BYDlogo" />
       <img src= {citroenlogo} alt="citroenlogo" />
       <img src= {gaclogo} alt="gaclogo" />
       <img src= {gwmlogo} alt="gwmlogo" />
       <img src= {MGlogo} alt="MGlogo" />
       <img src= {tatalogo} alt="tatalogo" />
       <img src= {teslalogo} alt="teslalogo" />
       <img src= {hyundailogo} alt="hyundailogo" />
       <img src= {mahindralogo} alt="mahindralogo" />
       <img src= {netalogo} alt="netalogo" />
       <img src= {nissanlogo} alt="nissanlogo" />
       <img src= {deepallogo} alt="deepallogo" />

       </div>
     
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

     <p1 className='topic2'>Electric Scooters</p1>
      <br></br>
      <br></br>
     <div className='scooter-album'>
      
     <img src= {atherlogo} alt="atherlogo" />
     <img src= {ecobitlogo} alt="ecobitlogo" />
     <img src= {niulogo} alt="niulogo" />
     <img src= {segwaylogo} alt="segwaylogo" />
     <img src= {supersocologo} alt="supersocologo" />
     <img src= {yadealogo} alt="yadealogo" />
     
     </div>
     
     <br></br>
     <br></br>
      <br></br>
      <br></br>

     <p2 className='topic3'>Electric Bikes</p2>
      <br></br>
      <br></br>
     <div className='bike-album'>
     <img src= {yatrilogo} alt="yatrilogo" />
     <img src= {supersocologo} alt="supersocologo" />
     </div>


     </div>
     </>
  )
}

export default Vehicle
