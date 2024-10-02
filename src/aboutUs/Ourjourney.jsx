import React from 'react'
import './Ourjourney.css'
 import needleunderline7 from '../assets/underlines/needleunderline7.png';
import meeting from '../assets/GIF/meeting.gif';
const Ourjourney = () => {
  return (
     <>
     <div className="ourjourney">
   

    <h1 className='ourjourney-heading'>Our Journey</h1>
    <img src={needleunderline7} alt='underline ' className='ourjourney-underline'></img>

       <div className="ourjourney-para">

        <div className='ourjourney-para-image'>
        <img src={meeting} alt="meeting" className='animate__animated  animate__fadeInDown' />
        </div>
        
           <div className='ourjourney-para-text'>
            <h1 className='ourjourney-para-heading animate__animated   animate__fadeInUp'>   

Our journey began with a simple idea: to create a one-stop platform where Nepalese consumers could access reliable and comprehensive information about electric vehicles. We recognized the need for a resource that not only showcased the latest EV models but also educated users on the benefits, availability, and infrastructure surrounding electric mobility in Nepal.
<br></br><br></br>
From the outset, we focused on building a community-oriented platform that empowers users to make informed decisions. We started by curating a detailed database of electric cars, bikes, scooters, and vans available in Nepal, ensuring that our users could compare models, explore brands, and understand the long-term benefits of transitioning to electric vehicles.
<br></br><br></br>
As the EV market in Nepal continues to grow, so does our platform. We’ve expanded our services to include tools like an EMI calculator, a fuel vs. electric consumption comparison, and a genuine advice hotline where users can consult with our experts to find the perfect EV for their needs.
<br></br><br></br>
Our commitment to sustainability goes beyond just vehicles. We actively collaborate with charging station providers, policy-makers, and the EV community to advocate for a greener future. As we continue to grow, our goal remains clear: to lead Nepal into a cleaner, more sustainable future by making electric vehicles accessible and appealing to everyone.</h1>
            </div>

        </div>
         
     </div>
     
     
     </>
  )
}

export default Ourjourney
