import React from 'react'
import './Gotoprice.css'
import ecar from '../assets/images/ecar.png'
import ebike from '../assets/images/ebike.png'
import escooter from '../assets/images/escooter.png'
import evan from '../assets/images/evan.png'
import { useNavigate } from 'react-router-dom'
import headingbg4 from '../assets/Background-images/headingbg4.jpg'

 
import pricemarq5 from '../assets/illustrations/pricemarq5.png'
import pricemarq6 from '../assets/illustrations/pricemarq6.png'
 

import divider3 from '../assets/underlines/divider3.png'
 

const Gotoprice = () => {

const navigate = useNavigate();

const handleViewPricingOne = () => {
    navigate('/carsprice');
};


const handleViewPricingTwo = () => {
    navigate('/bikesprice');
};


const handleViewPricingThree = () => {
    navigate('/scootersprice');
};

const handleViewPricingFour = () => {
    navigate('/vansprice');
};


 

 


  return (
     <>
     <div className="gotoprice">
     
   {/* <img src={divider3} alt="divider" className='divider-price' /> */}

   <div className='heading-image-container'>
       <img src= {headingbg4} alt="headingbg4" className='heading-imagetwo' />

       <h1 className='gotoprice-heading'> PRICE LIST</h1>
       <h2 className='gotoprice-subheading geologica-price'>Car - Bike - Scooter - Passenger Van</h2>
   </div>
   
 

<div className='price-illustration'>
    <img src={pricemarq6} alt="pricemarq3" className='marq6' />
     
    <img src={pricemarq5} alt="pricemarq4" className='marq5' />
</div>
 

<h1 className='quotetwo  geologica-price'>find the perfect electric vehicle within your budget</h1>



 

   <div className='box'>

     
    <div className='box1 animate__animated animate__bounceInLeft'>
        <div className='box1-img'><img src= {ecar} alt="carpic" /></div>

        <div className='box1-content'>
            <p className='content1 geologica-price'>Explore the full pricing details for Cars - Simply click the button below.</p>

            <button className='button1 animate__animated animate__heartBeat geologica-price' onClick={handleViewPricingOne}>View Pricing</button>
        </div>
    </div>
    
 
 

 
    <div className='box2 animate__animated animate__bounceInRight'>
     
     <div className='box2-img'><img src= {ebike} alt="bikepic" /></div>

    <div className='box2-content'>
        <p className='content2 geologica-price'>Explore the full pricing details for Bikes - Simply click the button below.</p>

        <button className='button2 animate__animated animate__heartBeat geologica-price' onClick={handleViewPricingTwo}>View Pricing</button>
    </div>
</div>
 
 

 
    <div className='box3 animate__animated animate__bounceInLeft'>
    <div className='box3-img'><img src= {escooter} alt="scooterpic" /></div>

    <div className='box3-content'>
        <p className='content3 geologica-price'>Explore the full pricing details for Scooters - Simply click the button below.</p>

        <button className='button3 animate__animated animate__heartBeat geologica-price' onClick={handleViewPricingThree}>View Pricing</button>
    </div>
</div>
 


 
    <div className='box4 animate__animated animate__bounceInRight'> 
    
<div className="box4-img"><img src= {evan} alt="vanpic" /></div>

    <div className='box4-content'>
        <p className='content4 geologica-price'>Explore the full pricing details for Passenger Vans - Simply click the button below.</p>

        <button className='button4 animate__animated animate__heartBeat geologica-price' onClick={handleViewPricingFour}>View Pricing</button>
    </div>
    
    </div>

   </div>
      
 

     
     
    
        </div>
     </>
  )
}

export default Gotoprice
