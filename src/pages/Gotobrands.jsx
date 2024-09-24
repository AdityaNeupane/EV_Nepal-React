 import React from 'react'
 import './Gotobrands.css'
 import { useNavigate } from 'react-router-dom'
 import ecar from '../assets/images/ecar.png'
 import ebike from '../assets/images/ebike.png'
 import escooter from '../assets/images/escooter.png'
 import evan from '../assets/images/evan.png'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
  import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons/faFaceLaughWink'
  import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons/faFaceLaughBeam'
  import headingbg4 from '../assets/Background-images/headingbg4.jpg'
 const Gotobrands = () => {

const navigate = useNavigate();

const handleExplore1More = () => {
  navigate('/carbrands');
};

const handleExplore2More = () => {
  navigate('/bikebrands');
};
const handleExplore3More = () => {
  navigate('/scooterbrands');
};
const handleExplore4More = () => {
  navigate('/passengervanbrands');
};


   return (
     <>
     <div className="gotobrands">

      <div className='image-container'>
        <img src= {headingbg4} alt="headingbg4" className='heading-image' />
          <h1 className='brand-heading'> BRANDS  </h1>
          <h2 className='brand-subheading'>Car - Bike - Scooter - Passenger Van</h2>
         </div>
         
          <h1 className='quoteone animate__animated animate__bounceIn'>Your ideal Electric Vehicle is just a click away - Explore your options now.</h1>
          
      <div className='cart'>
      
      <div className='cart1'>
      <div className='cart1-img'>
        <img src= {ecar} alt="carpic" />
        </div>
        <div className='cart1-text'>
          <p>Discover the leading Car brands available in Nepal. Click the button below to explore all brands.</p>
          <button className='explore1 animate__animated animate__heartBeat' onClick={handleExplore1More}>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </div>
      </div>
     
     <div className='cart2'>
      <div className='cart2-img'>
       <img src= {ebike} alt="bikepic" />
        </div>
        <div className='cart2-text'>
          <p>Uncover the top Bike brands in Nepal. Click the button below to see the full list.</p>
          <button className='explore2 animate__animated animate__heartBeat' onClick={handleExplore2More}>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </div>
      </div>

      <div className='cart3'>
      <div className='cart3-img'>
      <img src= {escooter} alt="scooterpic" />
        </div>
        <div className='cart3-text'>
          <p> Explore the range of Scooter brands available in Nepal. Click the button below for more details.</p>
          <button className='explore3 animate__animated animate__heartBeat' onClick={handleExplore3More}>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </div>
      </div>

      <div className='cart4'>
      <div className='cart4-img'>
        <img src= {evan} alt="vanpic" />
        </div>
        <div className='cart4-text'>
          <p> Find out about the Passenger Van brands available in Nepal. Click the button below to learn more.</p>
          <button className='explore4 animate__animated animate__heartBeat' onClick={handleExplore4More}>Explore More
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrow' />
          </button>
          </div>
      </div>

      </div>

       <div className='emoji'>
        <FontAwesomeIcon icon={faFaceSmileBeam}  className='emojis' />
        <FontAwesomeIcon icon={faFaceLaughWink}  className='emojis' />
        <FontAwesomeIcon icon={faFaceLaughBeam}  className='emojis' />
     
       </div>

      </div>
     
     
     </>
   )
 }
 
 export default Gotobrands
 