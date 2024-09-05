import React from 'react'
import './Ourteam.css'
import headingbg4 from '../assets/Background-images/headingbg4.jpg'
import officeperson from '../assets/images/officeperson.jpg'
import officeperson2 from '../assets/images/officeperson2.jpg'
import officeperson3 from '../assets/images/officeperson3.jpg'
const Ourteam = () => {
  return (
     <>
      
      <div className="ourteam">

        <div className='ourteam-image'>
        <img src={headingbg4} alt="headingbg4"  />
        <h1 className='ourteam-heading'>Our Team</h1>
        </div>
       
       <div className='ourteam-content'>
          <div className='ourteam-box'>
            <div className='ourteam-box1'>
                <div className='ourteam-box1-img'>
                    <img src={officeperson} alt="officeperson" />
                    </div>
                    <h1 className='ourteam-box1-heading'>Rosa Lewis</h1>
                    <p className='ourteam-box1-subheading'>Founder, CTO</p>
                    
            </div>
            <div className='ourteam-box2'>
                <div className='ourteam-box2-img'><img src={officeperson2} alt="officeperson2" /></div>
                <h1 className='ourteam-box2-heading'>Will Smith</h1>
                <p className='ourteam-box2-subheading'>Chief Executive Officer</p>
            </div>
            <div className='ourteam-box3'>
                <div className='ourteam-box3-img'><img src={officeperson3} alt="officeperson3" /></div>
                <h1 className='ourteam-box3-heading'>Kendall Jenner</h1>
                <p className='ourteam-box3-subheading'>Marketing Manager</p>
            </div>
            </div>

        </div>

        </div>
     
     </>
  )
}

export default Ourteam
