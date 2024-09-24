import React, { useState } from "react";
 import "./Mynavbar.css";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faChargingStation } from  '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo2 from "../assets/images/logo2.png";
const Navbar = () => {
 const [vehiclesDropdown, setVehiclesDropdown] = useState(false);
 const [priceListDropdown, setPriceListDropdown] = useState(false);


const [activeLink, setActiveLink] = useState("");

const handleSetActive = (link) => {
  setActiveLink(link);
};



return (
    <div className="navbar">
      <div className="logoimage">
        <Link to="/">
          <img src= {logo2} alt="logo" />
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
            <Link to="/Home">
            <span className="nav_links">Home</span>
            </Link>
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
          <span className="nav_links">
  <a 
    href="https://chargingstationsnepal.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Charging Stations
  </a>
    <FontAwesomeIcon icon={faChargingStation} className="dropdown-iconthree" />
</span>



            {/* vehicles dropdown menu  */}

            <ul className="navbar-item dropdown">
              <li
               
              onMouseEnter={() => setVehiclesDropdown(true)}
              onMouseLeave={() => setVehiclesDropdown(false)}
            >
              <div className="dropdownone">
                <span className="nav_links">Vehicles</span>
                  <FontAwesomeIcon icon={faCaretDown} className="dropdown-iconone" />
              </div>

              {vehiclesDropdown && (
                <ul className="dropdown-menuone">
                  <li>
                    <Link to="/Carbrands">Electric Car</Link>
                  </li>
                  <li>
                    <Link to="/Scooterbrands">Electric Scooter</Link>
                  </li>
                  <li>
                     <Link to="/Bikebrands">Electric Bike</Link>
                  </li>
                  <li>
                    <Link to="/Vanbrands">Passenger EV van</Link>
                  </li>
                </ul>
              )}
         </li>
</ul>


     {/* pricelist dropdown  */}


     <ul className="navbar-item dropdown">

       <li
               
              onMouseEnter={() => setPriceListDropdown(true)}
              onMouseLeave={() => setPriceListDropdown(false)}
            > 
            <div className="dropdowntwo">
        <span className="nav_links">Price List</span>
                  <FontAwesomeIcon icon={faCaretDown} className="dropdown-icontwo" />
              </div>


              {priceListDropdown && (
                <ul className="dropdown-menutwo">
                  <li>
                    <Link to="/Pricecars">Electric Car</Link>
                  </li>
                  <li>
                    <Link to="/Pricescooters">Electric Scooter</Link>
                  </li>
                  <li>
                    <Link to="/Pricebikes">Electric Bike</Link>
                  </li>
                  <li>
                    <Link to="/Pricevans">Passenger EV van</Link>
                  </li>
                </ul>
              )}
          </li> 

     </ul>


          <Scroll
            to="contactus"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "about" ? "active" : ""}
          >
            <span className="nav_links">Contact Us</span>
              {/* <FontAwesomeIcon icon={faPhone} className="dropdown-iconthree" /> */}
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
