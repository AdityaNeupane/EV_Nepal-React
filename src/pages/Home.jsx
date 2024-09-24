import React from "react";
import "./Home.css";
import Navbar from "../components/Mynavbar";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

const handleLearnMoreClick = () => {
  navigate('/info');
};

  return (
    <div className="herosection" id="home">
      <Navbar />
      <div className="hero">
      
          <h1 className="highlight" data-text="Your Gateway to the Electric Vehicle Revolution">Your Gateway to the Electric Vehicle Revolution</h1>
          
        <div className="hero_content">
          <p data-text="From zero emissions to cutting-edge technology, learn why electric vehicles are the future of transportation.">
            From zero emissions to <br></br> cutting-edge technology, <br></br>
            learn why electric vehicles <br></br> are the future of <br></br>
            transortation.
          </p>
          <button className="learn-more-button animate__animated animate__heartBeat" onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
