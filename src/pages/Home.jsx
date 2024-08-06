import React from "react";
import "./Home.css";
import Navbar from "../components/Mynavbar";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

const handleLearnMoreClick = () => {
  navigate('/Info');
};


  return (
    <div className="herosection" id="home">
      <Navbar />
      <div className="hero">
        <div className="h1">
          <h1>Your Gateway to the Electric Vehicle Revolution</h1>
        </div>
        <div className="hero_content">
          <p>
            From zero emissions to <br></br> cutting-edge technology, <br></br>
            learn why electric vehicles <br></br> are the future of <br></br>
            transortation.
          </p>
          <button className="learn-more-button" onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
