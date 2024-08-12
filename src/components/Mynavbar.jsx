import React, { useState } from "react";
import "../components/Mynavbar.css";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  // set the active nav
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="navbar">
      <div className="logoimage">
        <Link to="/">
          <img src="src/assets/images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navcart">
        <div className="navtext">
          <Scroll
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            onSetActive={handleSetActive}
            activeClass={activeLink === "home" ? "active" : ""}
          >
            <span className="nav_links">Home</span>
          </Scroll>
          <Scroll
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-70}
            onSetActive={handleSetActive}
            activeClass={activeLink === "menu" ? "active" : ""}
          >
            <span className="nav_links">About Us</span>
          </Scroll>
          
        {/* <Scroll
            to="chargingstations"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "about" ? "active" : ""}
          >
            <span>
              <a href="https://chargingstationsnepal.com" target="_blank" rel="noopener noreferrer">
              Charging Stations
              </a>
              </span>
          </Scroll> */}

          <span className="nav_links">
  <a 
    href="https://chargingstationsnepal.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Charging Stations
  </a>
</span>

          
          <Scroll
            to="vehicles"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "vehicles" ? "active" : ""}
          >
            <span className="nav_links">Vehicles</span>
          </Scroll>

         <Scroll
            to="price"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "price" ? "active" : ""}
          >
            <span className="nav_links">Price List</span>
          </Scroll>

          <Scroll
            to="contactus"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "about" ? "active" : ""}
          >
            <span className="nav_links">Contact Us</span>
          </Scroll>
        </div>
      </div>
      <div className="input">
        <input />
        <span className="search_icon">
          <IoIosSearch />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
