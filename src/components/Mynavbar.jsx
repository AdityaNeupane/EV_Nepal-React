import React, { useState } from "react";
import "../components/Mynavbar.css";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
 import { faAngleDown, faPhone } from  '@fortawesome/free-solid-svg-icons'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faChargingStation } from  '@fortawesome/free-solid-svg-icons'
//  import { faPhone } from  '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // set the active nav
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <FontAwesomeIcon icon={faChargingStation} className="dropdown-icontwo" />
</span>



 {/* <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Vehicles<FontAwesomeIcon icon={ faCaretDown } className="dropdown-icon" />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li className="dropdown-item">Menu Item 1</li>
            <li className="dropdown-item">Menu Item 2</li>
            <li className="dropdown-item">Menu Item 3</li>
          </ul>
        </div>
      )}
    </div> */}
          
          {/* <Scroll
            to="vehicle"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "vehicles" ? "active" : ""}
          > */}
           
         <Link to='/Vehicle' 
          className={`nav_links ${activeLink === 'vehicle' ? 'active' : ''}`} 
          onClick={() => {
            toggleDropdown();
            handleSetActive('vehicle'); 
          }}
        >


            <span className="veh">
              Vehicles 
            </span>
              <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
            </Link>
            
           {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-item">
                 Cars 
              </li>
              <li className="dropdown-item">
                 Bikes 
              </li>
              <li className="dropdown-item">
                {/* <Link to="/scooters">Scooters</Link> */}
                 Scooters
              </li>
            </ul>
          </div>
        )}


          {/* </Scroll>  */}
          

         <Scroll
            to="pricelist"
            spy={true}
            smooth={true}
            offset={-50}
            onSetActive={handleSetActive}
            activeClass={activeLink === "price" ? "active" : ""}
          >
            <Link to="/Pricelistthree" className="nav_links">
            <span className="pri">Price List</span>
              <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
            </Link>
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
