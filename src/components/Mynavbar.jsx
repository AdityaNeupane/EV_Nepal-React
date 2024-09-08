import React, { useState } from "react";
import "../components/Mynavbar.css";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faChargingStation } from  '@fortawesome/free-solid-svg-icons';
 
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
 

 const [vehiclesDropdown, setVehiclesDropdown] = useState(false);
 const [priceListDropdown, setPriceListDropdown] = useState(false);

   


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
    <FontAwesomeIcon icon={faChargingStation} className="dropdown-icontwo" />
</span>
          
          {/* vehicles dropdown menu  */}

         
             <li
              className="navbar-item dropdown"
              onMouseEnter={() => setVehiclesDropdown(true)}
              onMouseLeave={() => setVehiclesDropdown(false)}
            >
              <div className="dropdownone">
                <a href="#vehicles" className="nav_links">Vehicles</a>
                <a href="#">
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </div>

              {vehiclesDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#vehicle1">Electric Car</a>
                  </li>
                  <li>
                    <a href="#vehicle2">Electric Scooter</a>
                  </li>
                  <li>
                    <a href="#vehicle3">Electric Bike</a>
                  </li>
                </ul>
              )}
         </li>
     
     {/* pricelist dropdown  */}

       <li
              className="navbar-item dropdown"
              onMouseEnter={() => setPriceListDropdown(true)}
              onMouseLeave={() => setPriceListDropdown(false)}
            >
              <div className="dropdowntwo">
                <a href="#pricelist" className="nav_links">Price List</a>
                <a href="#">
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </div>

              {priceListDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#price1">Electric Car</a>
                  </li>
                  <li>
                    <a href="#price2">Electric Scooter</a>
                  </li>
                  <li>
                    <a href="#price3">Electric Bike</a>
                  </li>
                </ul>
              )}

          </li>

       
           
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
