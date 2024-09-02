import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="aboutus-section" id="aboutus">
        <h1 className="heading">Know the Story of EV-Nepal</h1>
        <br></br>
        <br></br>
        <p>
          Founded in 2024, EV Nepal Media Private Limited was born out of a
          passion to promote the rising<br></br> electric vehicle industry in Nepal.
          Our journey began when we saw an opportunity to establish our<br></br>
          brand beacuse a lot of people were eager to buy electric vehicles and
          there were no any website or <br></br> media houses to give information
          about EV's. Since then, we have grown from a small startup to a <br></br>
          leading player in the industry.
        </p>
        <br></br>
        <p>
           EV  Nepal is your  ultimate destination for all things electric vehicles in Nepal. Our  mission is to <br></br>empower  you with  comprehensive  and up-to-date  information on the electric  vehicle market , <br></br>making your transition to a greener and more sustainable mode of transportation easier than ever.<br></br> At EV Nepal, we are passionate about driving the future of mobility. Our platform is designed to<br></br>provide  detailed insights into  the  latest electric cars, bikes, and scooters available  in  Nepal.<br></br> Whether you're looking for the perfect EV that suits your lifestyle or seeking to learn more about <br></br>the  benefits  of  electric  vehicles , we've  got you covered. We also understand  the importance  of <br></br>convenience in your EV journey. That’s why we’ve integrated a comprehensive database of nearby <br></br>charging stations across the country, ensuring you have the power you need, wherever your travels<br></br>take you. Our team is committed to providing you with accurate, unbiased, and easy-to-understand <br></br>information, helping you make informed decisions about your next vehicle purchase. We believe that <br></br> electric vehicles are the future of transportation, and we're here to support you every step of the way<br></br> as you explore this exciting new world.
        </p>
        <br></br>
        <p>
         Thank you for choosing EV Nepal as your trusted source for electric vehicle information. Together,  <br></br>let's drive towards a cleaner, greener Nepal.  
        </p>
       <br></br>
       <br></br>
        <h1 className="team">Our Team</h1>
        <br></br>
        <br></br>
        <p>Behind EV Nepal is a dedicated team of professionals passionate about sustainable transportation. <br></br>Our team consists of experts in web development, design, and electric vehicle technology, all working <br></br>together to provide you with the most accurate and valuable information. We are committed to making <br></br>your journey into the world of electric vehicles as smooth and informed as possible.</p>
        <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className="team-grid">

        <div className="team-member">
          <div className="team-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="team-info">
              <h1 className="team-name">John Doe</h1>
              <h6 className="team-role">CEO-chief executing officer</h6>
            </div>
          </div>
        </div>
        
        <div className="team-member">
          <div className="team-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="team-info">
              <h1 className="team-name">Mark Cook</h1>
              <h6 className="team-role">CTO-chief technology officer</h6>
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="team-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="team-info">
              <h1 className="team-name">Ketty</h1>
              <h6 className="team-role">CMO-chief marketing officer</h6>
            </div>
          </div>
        </div>
      </div>

      
      
      </div>
    </>
  );
};

export default AboutUs;
