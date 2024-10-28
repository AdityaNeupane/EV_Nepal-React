 import React from 'react'
 import './Gotobrands.css'  
 import ecar from '../assets/images/ecar.png'
 import ebike from '../assets/images/ebike.png'
 import escooter from '../assets/images/escooter.png'
 import evan from '../assets/images/evan.png'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
 
  import headingbg4 from '../assets/Background-images/headingbg4.jpg'
  import uparrow from '../assets/icons/uparrow.png'

  import BYDlogo from '../assets/car-logo/BYDlogo.png';
  import citroenlogo from '../assets/car-logo/citroenlogo.png';
  import deepallogo from '../assets/car-logo/deepallogo.png';
  import teslalogo from '../assets/car-logo/teslalogo.png';
  import tatalogo from '../assets/car-logo/tatalogo.png';
  import sereslogo from '../assets/car-logo/sereslogo.png';
  import omadalogo from '../assets/car-logo/omadalogo.png';
  import nissanlogo from '../assets/car-logo/nissanlogo.png';
  import netalogo from '../assets/car-logo/netalogo.png';
  import hyundailogo from '../assets/car-logo/hyundailogo.png';
  import gaclogo from '../assets/car-logo/gaclogo.png';
  import gwmlogo from '../assets/car-logo/gwmlogo.png';
  import MGlogo from '../assets/car-logo/MGlogo.png';
  import atherlogo from '../assets/scooter-logo/atherlogo.png';
  import ecobitlogo from '../assets/scooter-logo/ecobitlogo.png';
  import segwaylogo from '../assets/scooter-logo/segwaylogo.png';
  import supersocologo from '../assets/scooter-logo/supersocologo.png';
  import yadealogo from '../assets/scooter-logo/yadealogo.png';
  import yatrilogo from '../assets/bike-logo/yatrilogo.jpg';
  import fotonlogo from '../assets/van-logo/fotonlogo.png';
  import kinglonglogo from '../assets/van-logo/kinglonglogo.png';
  import kyclogo from '../assets/van-logo/kyclogo.png';
  import sokonlogo from '../assets/van-logo/sokonlogo.png';
  import srmlogo from '../assets/van-logo/srmlogo.png';
  import wulinglogo from '../assets/van-logo/wulinglogo.png';
  import mahindralogo from '../assets/car-logo/mahindralogo.png';
  import niulogo from '../assets/scooter-logo/niulogo.png';
  import { Link } from "react-router-dom";
  import divider2 from '../assets/underlines/divider2.png';

 const Gotobrands = () => {


 const logos = [
   BYDlogo, citroenlogo, deepallogo, teslalogo, tatalogo, 
  sereslogo, omadalogo, nissanlogo, netalogo, hyundailogo, gaclogo, gwmlogo, MGlogo, atherlogo, ecobitlogo, segwaylogo, supersocologo, yadealogo, yatrilogo, fotonlogo, kinglonglogo, kyclogo, sokonlogo, srmlogo, wulinglogo, mahindralogo, niulogo
  
];

  const getLogosForSlide = (startIndex) => {
    return logos.slice(startIndex, startIndex + 9);
  };


   return (
     <>
     <div className="gotobrands">
     
     <img src={divider2} alt="divider" className='divider-brands' />

      <div className='image-container'>
        <img src= {headingbg4} alt="headingbg4" className='heading-image' />
          <h1 className='brand-heading'> BRANDS  </h1>
          <h2 className='brand-subheading'>Car - Bike - Scooter - Passenger Van</h2>
         </div>
         
         



      <div className="marquee-container">
  {[0, 9, 18].map((startIndex) => (
    <div className={`marquee-slide marquee-slide-${startIndex + 1}`} key={startIndex}>
      <div className="marquee-content">
        {getLogosForSlide(startIndex).map((logo, idx) => (
          <img src={logo} alt={`Logo ${idx + 1}`} key={idx} />
        ))}
        {/* Duplicate the logos for seamless scrolling */}
        {getLogosForSlide(startIndex).map((logo, idx) => (
          <img src={logo} alt={`Logo ${idx + 1}`} key={`duplicate-${idx}`} />
        ))}
      </div>
    </div>
  ))}
</div>


<h1 className='quoteone  effect3d '>Your ideal Electric Vehicle is just a click away - Explore your options now.</h1>


          
      <div className='cart'>
      
      <div className='cart1 animate__animated animate__bounceInUp'>
      <div className='cart1-img'>
        <img src= {ecar} alt="carpic" />
        </div>
        <div className='cart1-text'>
          <p>Discover the leading Car brands available in Nepal. Click the button below to explore.</p>
          <Link to="/Carbrands">
          <button className='explore1 animate__animated animate__heartBeat'>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </Link>
          </div>
      </div>
     
     <div className='cart2 animate__animated animate__bounceInDown'>
      <div className='cart2-img'>
       <img src= {ebike} alt="bikepic" />
        </div>
        <div className='cart2-text'>
          <p>Uncover the top Bike brands in Nepal. Click the button below to see the full list.</p>
          <Link to="/Bikebrands">
          <button className='explore2 animate__animated animate__heartBeat' >Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </Link>
          </div>
      </div>

      <div className='cart3 animate__animated animate__bounceInUp'>
      <div className='cart3-img'>
      <img src= {escooter} alt="scooterpic" />
        </div>
        <div className='cart3-text'>
          <p> Explore the range of Scooter brands available in Nepal. Click the button below for more details.</p>
          <Link to="/Scooterbrands">
          <button className='explore3 animate__animated animate__heartBeat'>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </Link>
          </div>
      </div>

      <div className='cart4 animate__animated animate__bounceInDown'>
      <div className='cart4-img'>
        <img src= {evan} alt="vanpic" />
        </div>
        <div className='cart4-text'>
          <p> Find out about the Passenger Van brands available in Nepal. Click the button below to learn more.</p>
          <Link to="/Vanbrands">
          <button className='explore4 animate__animated animate__heartBeat' >Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </Link>
          </div>
      </div>

      </div>

        
  
        <div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={uparrow} alt="uparrow" className='uparrowfixed animate__animated animate__zoomIn' /></button></div>

      </div>
     
     
     </>
   )
 }
 
 export default Gotobrands
 