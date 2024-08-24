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
 const Gotobrands = () => {

const navigate = useNavigate();

const handleExplore1More = () => {
  navigate('/Carbrands');
};

const handleExplore2More = () => {
  navigate('/Bikebrands');
};
const handleExplore3More = () => {
  navigate('/Scooterbrands');
};
const handleExplore4More = () => {
  navigate('/Vanbrands');
};


   return (
     <>
     <div className="gotobrands">
          <h1 className='brand-heading'> Explore Available Electric Vehicle Brands in Nepal </h1>

      <div className='cart'>
      
      <div className='cart1'>
      <div className='cart1-img'>
        <img src= {ecar} alt="carpic" />
        </div>
        <div className='cart1-text'>
          <p>Discover the leading Car brands available in Nepal. Click the button below to explore all brands.</p>
          <button className='explore' onClick={handleExplore1More}>Explore More
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
          <button className='explore' onClick={handleExplore2More}>Explore More
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
          <button className='explore' onClick={handleExplore3More}>Explore More
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
          <button className='explore' onClick={handleExplore4More}>Explore More
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
 