import React from 'react'
import './Ourteam.css'
import needleunderline6 from '../assets/underlines/needleunderline6.png'
import officeperson from '../assets/images/officeperson.jpg'
import officeperson2 from '../assets/images/officeperson2.jpg'
import officeperson3 from '../assets/images/officeperson3.jpg'
const Ourteam = () => {
  return (
     <>
      
      <div className="ourteam">

         <h1 className='ourteam-heading'>Our Team</h1>
         <img src={needleunderline6} alt='underline' className='ourteam-underline'></img>
        
       <div className='ourteam-content'>
          <div className='ourteam-box'>
            <div className='ourteam-box1 animate_animated  animate__bounceInUp'>
                <div className='ourteam-box1-img '>
                    <img src={officeperson} alt="officeperson" />
                    </div>
                    <h1 className='ourteam-box1-heading'>Rosa Lewis</h1>
                    <p className='ourteam-box1-subheading'>Founder, CTO</p>
                    
            </div>
            <div className='ourteam-box2 animate_animated  animate__bounceInUp'>
                <div className='ourteam-box2-img'><img src={officeperson2} alt="officeperson2" /></div>
                <h1 className='ourteam-box2-heading'>Jacob Smith</h1>
                <p className='ourteam-box2-subheading'>Chief Executive Officer</p>
            </div>
            <div className='ourteam-box3 animate_animated  animate__bounceInUp'>
                <div className='ourteam-box3-img'><img src={officeperson3} alt="officeperson3" /></div>
                <h1 className='ourteam-box3-heading'>Lisa Collins</h1>
                <p className='ourteam-box3-subheading'>Marketing Manager</p>
            </div>
            </div>

        </div>

        </div>
     
     </>
  )
}

export default Ourteam
