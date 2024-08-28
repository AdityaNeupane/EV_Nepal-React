import React from 'react'
import './Gotoprice.css'
import ecar from '../assets/images/ecar.png'
import ebike from '../assets/images/ebike.png'
import escooter from '../assets/images/escooter.png'
import evan from '../assets/images/evan.png'
const Gotoprice = () => {
  return (
     <>
     <div className="gotoprice">
     <h1 className='gotoprice-heading'>Find the Perfect Electric Vehicle Within Your Budget</h1>

   <div className='box'>
    
    <div className='box1'>
        <div className='box1-img'><img src= {ecar} alt="carpic" /></div>

        <div className='box1-content'>
            <p className='content1'>Explore the full pricing details for <u>Cars</u> - Simply click the button below.</p>

            <button className='button1'>View Pricing</button>
        </div>
    </div>
    

    <div className='box2'>
   

    <div className='box2-content'>
        <p className='content2'>Explore the full pricing details for <u>Bikes</u> - Simply click the button below.</p>

        <button className='button2'>View Pricing</button>
    </div>

    <div className='box2-img'><img src= {ebike} alt="bikepic" /></div>
</div>

    <div className='box3'>
    <div className='box3-img'><img src= {escooter} alt="scooterpic" /></div>

    <div className='box3-content'>
        <p className='content3'>Explore the full pricing details for <u>Scooters</u> - Simply click the button below.</p>

        <button className='button3'>View Pricing</button>
    </div>
</div>

    <div className='box4'> 
    
    <div className='box4-content'>
        <p className='content4'>Explore the full pricing details for <u>Passenger Vans</u> - Simply click the button below.</p>

        <button className='button4'>View Pricing</button>
    </div>
    <div className='box4-img'><img src= {evan} alt="vanpic" /></div>
    </div>

   </div>
     
    <h1 className='gotoprice-ending'>Take the next step towards an eco-friendly and cost-effective ride.</h1>

        </div>
     </>
  )
}

export default Gotoprice
