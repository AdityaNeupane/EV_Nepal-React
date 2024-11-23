import React from "react";
import "./Home.css";
import Navbar from "../components/Mynavbar";
import Display from "../pages/Display";
import Gotobrands from "../pages/Gotobrands";
import { useNavigate } from "react-router-dom";
import scroll3 from "../assets/icons/scroll3.png";

const Home = () => {

const navigate = useNavigate();

const handleLearnMoreClick = () => {
  navigate('/info');
};


const scrollToSection = () => {
        window.scrollTo({
            top: window.innerHeight, // Adjust this value to scroll to the desired position
            behavior: 'smooth' // Enables smooth scrolling
        });
    };

  return (
    <div className="herosection" id="home">
      {/* <Navbar /> */}
      <div className="hero">
      
          <h1 className="highlight   gloria-hallelujah-home  " data-text="Your gateway to the Electric Vehicle Revolution">Your gateway to the Electric Vehicle Revolution</h1>
          
        <div className="hero_content">
          <p  className="hero-text animate__animated animate__slideInDown geologica-home ">
            From zero emissions to <br></br> cutting-edge technology, <br></br>
            learn why electric vehicles <br></br> are the future of <br></br>
            transortation.
          </p>
          <button className="learn-more-button geologica-home animate__animated animate__heartBeat" onClick={handleLearnMoreClick}>Learn More</button>
        </div>
       
            <button onClick={scrollToSection}>  <img src={scroll3} alt="scroll3" className="scroll animate__animated  animate__jackInTheBox" />   </button>
      </div>
     


    {/* <Display /> */}
    <Gotobrands />
</div>

  );
};

export default Home;
